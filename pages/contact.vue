<template>
  <div class="mainContainer">
    <div class="section">
      <h1>Grow SeaWeed</h1>
      <v-carousel v-model="model" class="h-100">
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="text-h2">Slide {{ i + 1 }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="section">
      <v-row>
        <v-col cols="6" md="6" sm="12">
          <div class="details2Section">
            <v-list three-line>
              <template v-for="(item, index) in items">
                <v-subheader
                  v-if="item.header"
                  :key="item.header"
                  v-text="item.header"
                ></v-subheader>

                <v-divider
                  v-else-if="item.divider"
                  :key="index"
                  :inset="item.inset"
                  style="display: none"
                ></v-divider>

                <v-list-item v-else :key="item.title">
                  <v-list-item-avatar size="40">
                    <!-- <v-img :src="item.avatar"></v-img> -->
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${
                        index * 5 + 10
                      }`"
                      :lazy-src="`https://picsum.photos/10/6?image=${
                        index * 5 + 10
                      }`"
                      aspect-ratio="1"
                      class="grey lighten-2"
                    ></v-img>
                  </v-list-item-avatar>

                  <v-list-item-content class="pa-3 mb-5">
                    <v-list-item-title
                      style="font-weight: bold"
                      v-html="item.title"
                    ></v-list-item-title>
                    <v-list-item-subtitle
                      v-html="item.subtitle"
                    ></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list>
          </div>
        </v-col>
        <v-col cols="6" md="6" sm="12">
          <div class="profileImage">
            <img src="../assets/images/profile.jpeg" alt="" srcset="" />
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-btn rounded color="primary" class="mx-auto mt-4" dark>
          Show More
        </v-btn>
      </v-row>
    </div>
    <div class="section3">
      <v-container>
        <h1 class="text-center mt-5">
          Let's grow some seaweed! Be part of the newest and more innovative way
          of farming.
        </h1>
      </v-container>
    </div>
    <div class="section4">
      <v-container>
        <h1 class="text-center mt-5">
          Let's grow some seaweed! Be part of the newest and more innovative way
          of farming.
        </h1>
        <img
          src="../assets/images/life_style_working_16-removebg-preview.png"
          alt=""
          srcset=""
        />
      </v-container>
    </div>
    <div class="section5">
      <v-row>
        <v-col cols="6" md="6" sm="12">
          <div class="profileImageLeft">
            <img src="../assets/images/profile.jpeg" alt="" srcset="" />
          </div>
        </v-col>
        <v-col cols="6" md="6" sm="12">
          <div class="details2Section">
            <v-container>
              <h1>John Doe</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of
              </p>
              <v-col cols="12">
                <v-icon size="40"> mdi-heart </v-icon> Lorem Ipsum is simply
                dummy text of the printing and typesetting
              </v-col>
              <v-col cols="12">
                <v-icon size="40"> mdi-heart </v-icon> Lorem Ipsum is simply
                dummy text of the printing and typesetting
              </v-col>
              <v-col cols="12">
                <v-icon size="40"> mdi-heart </v-icon> Lorem Ipsum is simply
                dummy text of the printing and typesetting
              </v-col>
              <v-btn rounded color="primary" class="mx-auto mt-4" dark>
                Show More
              </v-btn>
            </v-container>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="section6">
      <v-row class="section6row">
        <v-col cols="6" md="6">
          <v-row>
            <v-col cols="3" md="3">
              <v-container class="text-center">
                <h1>100K</h1>
                <p style="font-weight:300">Lorum Ipsum</p>
              </v-container>
            </v-col>
            <v-col cols="3" md="3">
              <v-container>
                <h1>100K</h1>
                <p style="font-weight:300">Lorum Ipsum</p>
              </v-container>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="6" md="6">
          <v-container style="font-weight:300">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of
          </v-container>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
    items: [
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
        subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
      },
      { divider: true, inset: true },
      {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle:
          '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
      },
      { divider: true, inset: true },
    ],
  }),
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Open+Sans:wght@300&family=Poppins:wght@500&family=Raleway:wght@500&display=swap');

* {
  font-family: 'Montserrat';
}
h1 {
  text-align: center;
}
.mainContainer {
  margin-top: 100px;
}
.section {
  min-height: 100vh;
}
.section3 {
  min-height: 100vh;
  background: #bfd0cd;
}
.section4 {
  min-height: 100vh;
  background: #74c4ba;
  position: relative;
}
.section4 >>> img {
  position: absolute;
  height: 500px;
  width: 500px;
  bottom: 0;
  right: 0;
}
.section5 {
  min-height: 100vh;
}
.section6 {
  min-height: 40vh;
  background: #e7e7e9;
}
.section6row{
    padding-top: 7%;
}
.section6 >>> h1{
    font-weight: bolder;
}
.details2Section {
  margin-top: 10%;
  padding-left: 20px;
  padding-right: 20px;
}
.profileImage {
  margin-right: 5px;
}
.profileImageLeft {
  margin-left: 5px;
  margin-top: 50px;
}
.profileImage >>> img {
  width: 100%;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  border: 5px solid #000;
  border-right: none;
}
.profileImageLeft >>> img {
  width: 100%;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  border: 5px solid #000;
  border-left: none;
}
</style>
