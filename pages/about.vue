<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      
      <v-container>
        <v-card class="pa-4">
           <v-row justify="space-around" justify-left>
             <v-col cols="12" sm="3" align="center">
              <v-img max-width="160" src="../avater.png"></v-img>
            </v-col>
            <v-col>
              <span class="pt-12">
                <div class="headline">こーひーあーる</div>
              </span>
              <div class="pt-3">
                <p>
                  魚釣りと肉とコーヒーが好きなプログラマーです。ラテアートちょっとデキル☕︎<br/>
                  仕事はWeb系のシステムの運用/開発、趣味でゲームの開発。作ったことに対する反応が楽しみ。<br/>
                  社会不安を抱えていてメンタルは弱め。優しく接してくれると助かります。<br/>
                  マルチ・ポテンシャライトな気質があって、興味関心のある対象はコロコロ変わります。現在はAWSでのサーバー構築をしてハードウェアメンテナンスの手間やコストを削り、周りの人の作業を楽にするのが目標です。<br/>
                </p>
              </div>
            </v-col>
          </v-row>
        </v-card>

        <v-card class="ma-6">
          <v-card-title class="green lighten-1">
            <h2 class="headline white--text font-weight-light">History</h2>
          </v-card-title>
          <v-container>
            <v-row>
              <v-col>
                <ul>
                  <li>2019.07 ECサイト開発会社</li>
                  <li>2018.07 個人ゲーム開発 「Re Painter」</li>
                  <li>2015.04 モバイルブラウザゲーム運営会社</li>
                  <li>2011.04 材料系工業大学</li>
                </ul>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

      </v-container>

      <v-row justify="space-around">
        <span class="group pa-12">
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

