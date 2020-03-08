<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      
      <v-row>

        <v-col v-for="work in works" :key="work.name">
          <v-card class="mx-auto" max-width="344">
            <v-img :src="work.thumbnail" height="200px"></v-img>
            <v-card-title>{{ work.title }}</v-card-title>
            <v-card-subtitle>{{ work.subtitle }}</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" text :disabled="work.linkdisable1" :href="work.linkurl1" target="_blank">{{ work.linkname1}}</v-btn>
              <v-btn color="purple" text :disabled="work.linkdisable2" :href="work.linkurl2" target="_blank">{{ work.linkname2}}</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="work.show = !work.show">
                <v-icon>{{ work.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="work.show">
                <v-divider></v-divider>
                <v-card-text>
                  {{ work.explain }}
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

      </v-row>
    </v-flex>
  </v-layout>
</template>

<script>

export default {

  data () {
    return {
      works: [
        {
          title: 'Re Painter',
          subtitle: 'ゲーム(win/mac)',
          thumbnail: '../works/re_painter.png',
          explain: '親しみやすい見下ろし視点のスクロールアクションに描いたイラストが必殺技になるシステムを加えた短編2Dアクションゲーム。Unityを使い個人で制作をし、Steamにてリリース。',
          show: false,
          linkdisable1: false,
          linkname1: 'Store',
          linkurl1: 'https://store.steampowered.com/app/1096420/Re_Painter/',
          linkdisable2: true,
          linkname2: '',
          linkurl2: '',
        },
        {
          title: 'YOZORA MAKER',
          subtitle: 'ゲーム(PC-WebGL)',
          thumbnail: '../works/yozora_maker.jpg',
          explain: 'プレイヤー自身が撃った弾を避け続ける、物理演算を使った避けゲーム。',
          show: false,
          linkdisable1: false,
          linkname1: 'Play',
          linkurl1: 'https://unityroom.com/games/coffee-r-202002',
          linkdisable2: false,
          linkname2: 'GIT',
          linkurl2: 'https://github.com/coffee-r/yozora-maker',
        },
        {
          title: 'ぱりんぱりん惑星',
          subtitle: 'ゲーム(PC-WebGL/iOS/Android)',
          thumbnail: '../works/parinparin.png',
          explain: '四方から迫り来る星々を設置型トラップで爆破し、自陣の星をできる限り守り抜いてゆくカジュアルなタワーディフェンスゲーム。',
          show: false,
          linkdisable1: false,
          linkname1: 'Play',
          linkurl1: 'https://unityroom.com/games/parinparin',
          linkdisable2: true,
          linkname2: '',
          linkurl2: '',
        },
        {
          title: 'Bingo Time Simulator',
          subtitle: 'Party tool',
          thumbnail: '../works/bingo.png',
          explain: '宴会でのビンゴの所要時間を予測するツール。JavaScriptを使ってブラウザ上で計算しています。自分が欲しかったので作りました。',
          show: false,
          linkdisable1: false,
          linkname1: 'Explore',
          linkurl1: 'https://coffee-ryo.devel.jp/app_Bingo.html',
          linkdisable2: true,
          linkname2: '',
          linkurl2: '',
        },
        {
          title: 'Burning Snowman',
          subtitle: 'ゲーム(PC-WebGL)',
          thumbnail: '../works/snowman.png',
          explain: '人間を苦しめている寒さを止めるために、雪だるまが松明を持って永遠の冬を溶かす2Dのアクションアドベンチャー。',
          show: false,
          linkdisable1: false,
          linkname1: 'Play',
          linkurl1: 'https://unityroom.com/games/burning_snowman',
          linkdisable2: true,
          linkname2: '',
          linkurl2: '',
        },     
        {
          title: '居合切り',
          subtitle: 'ゲーム(PC-WebGL)',
          thumbnail: '../works/iai.png',
          explain: '一対一でどちらが先に攻撃を当てられるかの駆け引きを行う対戦アクションゲーム。',
          show: false,
          linkdisable1: false,
          linkname1: 'Play',
          linkurl1: 'https://unityroom.com/games/coffee_iaigiri',
          linkdisable2: true,
          linkname2: '',
          linkurl2: '',
        },
        {
          title: 'オンラインテニス',
          subtitle: 'ゲーム(PC-WebGL)',
          thumbnail: '../works/online_tennis.png',
          explain: 'Unity×Photonを使った、PONGの通信対戦ができるゲーム。',
          show: false,
          linkdisable1: true,
          linkname1: '',
          linkurl1: '',
          linkdisable2: true,
          linkname2: '',
          linkurl2: '',
        }
      ]
    }
  }
}
</script>
