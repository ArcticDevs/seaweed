import { providers, utils } from 'ethers'
import WalletConnectProvider from '@walletconnect/web3-provider'
import WalletLink from 'walletlink'

let store, provider, correctNetwork, connecting
let callBackList = []

let cachedWallet = lsGet('cachedWallet')

function setProvider() {
  if (connecting) return
  connecting = true

  // set up listeners (chain changed, disconnect...)
  watchProvider(provider)

  provider
    .getNetwork()
    .then((network) => {
      // verify network
      if (network.chainId !== 1) {
        store.commit('snackbar', [
          'error',
          'Error: Connect to Ethereum Mainnet',
        ])

        store.commit('connectText', 'Connect to Ethereum Mainnet')
        return
      }

      correctNetwork = true
      return provider.getSigner().getAddress()
    })
    .then((sAddress) => {
      // need to switch networks, metamask only
      if (!sAddress && !cachedWallet && lsGet('cachedWallet') === 'MetaMask')
        return switchNetworks()

      // store signer address first
      const connectAddress = sAddress.slice(0, 6) + '...' + sAddress.slice(-4)
      store.commit('connectText', connectAddress)
      store.commit('sAddress', sAddress)
      // pass provider object to all call back requests
      callBackList.forEach((e) => {
        e.cb(provider)
      })

      // testing //////////////////
      const signer = provider.getSigner()
      const message =
        'Greetings from Real Items! \n\nSign this message to log into TAM. ' +
        'This signature will not cost you any fees.' +
        `\n\nTimestamp: ${Date.now()}`

      signer
        .signMessage(message)
        .then((signature) => {
          // verify signature
          const checkAddress = utils.verifyMessage(message, signature)
          console.log(checkAddress)
          console.log(sAddress)

          console.log('verified', checkAddress === sAddress)
        })
        .catch((error) => {
          console.error('hey', error)
        })
    })
    .catch((error) => {
      if (!correctNetwork)
        store.commit('snackbar', [
          'error',
          'Error: Connect to Ethereum Mainnet',
        ])

      cachedWallet = undefined
      localStorage.removeItem('cachedWallet')

      console.error(error)
    })
    .finally(() => {
      connecting = false
    })
}

function connectWallet(selectedWallet) {
  // disconnect if null/empty
  if (!selectedWallet) {
    localStorage.removeItem('cachedWallet')
    return window.location.reload()
  }

  let w3p

  switch (selectedWallet) {
    case 'MetaMask':
      w3p = window.ethereum
      break
    case 'WalletConnect':
      w3p = new WalletConnectProvider({
        // todo: better infura key?
        infuraId: '9aa3d95b3bc440fa88ea12eaa4456161',
      })
      break
    case 'WalletLink':
      // manually check if walletLink disconnected (can't be detected on listener)
      if (cachedWallet && !lsGet('wlChain')) {
        cachedWallet = undefined
        localStorage.removeItem('cachedWallet')
        return
      }

      w3p = new WalletLink({
        appName: 'TAM',
        appLogoUrl: 'https://example.com/logo.png',
        darkMode: false,
      }).makeWeb3Provider(
        'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        1
      )
      break
  }

  // check if provider used is supported
  if (!w3p || (!w3p.isMetaMask && !w3p.isWalletConnect && !w3p.isWalletLink))
    return store.commit('snackbar', [
      'error',
      'Error: Unrecognized wallet selected',
    ])

  console.log(`Connecting to ${selectedWallet}`)

  // set provider
  provider = new providers.Web3Provider(w3p)

  // request to connect account
  function connectAccount() {
    return selectedWallet === 'WalletConnect'
      ? provider.provider.enable()
      : provider.send('eth_requestAccounts', [])
  }

  connectAccount()
    .then(() => {
      if (!cachedWallet || cachedWallet !== selectedWallet)
        localStorage.setItem('cachedWallet', selectedWallet)

      setProvider()
    })
    .catch((error) => {
      store.commit('snackbar', [
        'error',
        `Error: Unable to connect to ${selectedWallet}`,
      ])

      cachedWallet = undefined
      localStorage.removeItem('cachedWallet')

      console.error(error)
    })
}

function switchNetworks() {
  console.log('switch called')
  window.ethereum
    .request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    })
    .catch((error) => {
      console.error(error)
    })
}

function watchProvider() {
  const isWalletLink = lsGet('cachedWallet') === 'WalletLink'
  const wlChainId = lsGet('wlChain')

  // access inner provider.provider to listen to events
  const w3p = provider.provider

  w3p.on('chainChanged', (chainId) => {
    console.log('chainChanged', chainId)
    // walletlink chainChanged is called on connect, which causes reload loop
    if (isWalletLink && parseInt(wlChainId) === chainId) return

    window.location.reload()
  })

  w3p.on('accountsChanged', (accounts) => {
    console.log('accountsChanged', accounts)
    // if all accounts removed, remove from cache
    if (!accounts.length) localStorage.removeItem('cachedWallet')

    window.location.reload()
  })

  w3p.on('disconnect', () => {
    console.log('disconnect')
    localStorage.removeItem('cachedWallet')

    window.location.reload()
  })
}

// wait until nuxt store is available
window.onNuxtReady(() => {
  store = window.$nuxt.$store
  // if no cached wallet, don't auto connect
  if (cachedWallet) connectWallet(cachedWallet)
})

// helper
function lsGet(key) {
  let keyFull

  switch (key) {
    case 'wlChain':
      keyFull = '-walletlink:https://www.walletlink.org:DefaultChainId'
      break

    default:
      keyFull = key
      break
  }
  return localStorage.getItem(keyFull)
}

const getProvider = function (cb, from) {
  if (correctNetwork) cb(provider)
  // if network not yet retrieved, add callback
  else {
    // if item is already in callback
    // todo: actually there is no need to have a callback list
    // only service the last request, with the exception of inject
    // that can be written in when provider is first retrieved
    if (callBackList.some((obj) => obj.from === from)) {
      console.error('Duplicate callback found, removing...')
      // todo: review original implementation is other program
      // remove all callbacks from same from location
      callBackList = callBackList.filter((obj) => obj.from !== from)
    }

    callBackList.push({ cb, from })
  }
}

export { getProvider, connectWallet }