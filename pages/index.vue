
<template>
  <v-layout column justify-center>
    <v-flex xs12 sm8 md6>

      <v-row justify="space-around">
        <span class="pt-12" style="text-align:center;">
          <div class="display-4	font-weight-black">HELLO.</div>
        </span>
      </v-row>

      <v-row justify="space-around">
        <span class="pt-12" style="text-align:center;">
          <div class="subtitle-1 font-weight-black">ゲームやウェブシステムをつくっている</div>
          <div class="subtitle-1 font-weight-black">とある開発者の個人サイト</div>
        </span>
      </v-row>

      <v-row justify="space-around">
        <span class="group pa-12">
          <span v-for="icon in icons" :key="icon.url">
            <social-icon-button :url="icon.url" :name="icon.name"></social-icon-button>
          </span>
        </span>
      </v-row>

      <v-row justify="space-around">
        <v-container style="max-width:1000px;">
          <v-img src="title.png" aspect-ratio="4" contain ></v-img>
        </v-container>
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
          url: 'https://unityroom.com/users/3cr10wv7fsuxmag8h594',
          name: 'mdi-gamepad-square'
        },
        {
          url: 'https://coffee-ryo.hatenablog.com/',
          name: 'mdi-note-text'
        },
      ]
    }
  }
}
</script>
