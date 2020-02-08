
<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>
      <v-container style="max-width:1000px;">
        <v-img src="title.png" position="center" aspect-ratio="3" contain ></v-img>
      </v-container>
      <v-container>
        <div class="display-4	font-weight-black" style="text-align:center;">HELLO.</div>
      </v-container>

      <v-row justify="space-around">
        <span class="group pa-10">
          <span v-for="icon in icons" :key="icon.url">
            <social-icon-button :url="icon.url" :name="icon.name"></social-icon-button>
          </span>
        </span>
      </v-row>

    </v-flex>
  </v-layout>
</template>

<script>
import SocialIconButton from '~/components/SocialIconButton.vue'
export default {
  components: {
    SocialIconButton
  },
  data () {
    return {
      icons: [
        {
          url: 'https://twitter.com/plus_marumaru',
          name: 'mdi-twitter-circle'
        },
       {
          url: 'https://github.com/coffee-r',
          name: 'mdi-github-circle'
        },
       {
          url: 'https://coffee-ryo.hatenablog.com/',
          name: 'mdi-note-text'
        }
      ]
    }
  }
}
</script>
