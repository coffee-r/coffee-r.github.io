<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img src="../works/re_painter.png" height="200px"></v-img>
            <v-card-title>Re Painter</v-card-title>
            <v-card-subtitle>ゲーム(win/mac)</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" text href="https://store.steampowered.com/app/1096420/Re_Painter/" target="_blank">Store</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show1 = !show1">
                <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show1">
                <v-divider></v-divider>
                <v-card-text>
                  親しみやすい見下ろし視点のスクロールアクションに描いたイラストが必殺技になるシステムを加えた短編2Dアクションゲーム。Unityを使い個人で制作をし、Steamにてリリース。
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img src="../works/parinparin.png" height="200px"></v-img>
            <v-card-title>ぱりんぱりん惑星</v-card-title>
            <v-card-subtitle>ゲーム(PC-WebGL/iOS/Android)</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" text href="https://unityroom.com/games/parinparin" target="_blank">Play</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show2 = !show2">
                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show2">
                <v-divider></v-divider>
                <v-card-text>
                  四方から迫り来る星々を設置型トラップで爆破し、自陣の星をできる限り守り抜いてゆくカジュアルなタワーディフェンスゲーム。
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img src="../works/bingo.png" height="200px"></v-img>
            <v-card-title>Bingo Time Simulator</v-card-title>
            <v-card-subtitle>Party tool</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" text href="https://coffee-ryo.devel.jp/app_Bingo.html" target="_blank">Explore</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show3 = !show3">
                <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show3">
                <v-divider></v-divider>
                <v-card-text>
                  宴会でのビンゴの所要時間を予測するツール。JavaScriptを使ってブラウザ上で計算しています。自分が欲しかったので作りました。
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img src="../works/snowman.png" height="200px"></v-img>
            <v-card-title>Burning Snowman</v-card-title>
            <v-card-subtitle>ゲーム(PC-WebGL)</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" text href="https://unityroom.com/games/burning_snowman" target="_blank">Play</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show4 = !show4">
                <v-icon>{{ show4 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show4">
                <v-divider></v-divider>
                <v-card-text>
                  人間を苦しめている寒さを止めるために、雪だるまが松明を持って永遠の冬を溶かす2Dのアクションアドベンチャー。
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img src="../works/iai.png" height="200px"></v-img>
            <v-card-title>居合切り</v-card-title>
            <v-card-subtitle>ゲーム(PC-WebGL)</v-card-subtitle>
            <v-card-actions>
              <v-btn color="blue" text href="https://unityroom.com/games/coffee_iaigiri" target="_blank">Play</v-btn>
              <v-spacer></v-spacer>
              <v-btn icon @click="show5 = !show5">
                <v-icon>{{ show5 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show5">
                <v-divider></v-divider>
                <v-card-text>
                  一対一でどちらが先に攻撃を当てられるかの駆け引きを行う対戦アクションゲーム。
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" max-width="344">
            <v-img src="../works/online_tennis.png" height="200px"></v-img>
            <v-card-title>オンラインテニス</v-card-title>
            <v-card-subtitle>ゲーム(PC-WebGL)</v-card-subtitle>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon @click="show6 = !show6">
                <v-icon>{{ show6 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div v-show="show6">
                <v-divider></v-divider>
                <v-card-text>
                  Unity×Photonを使った、PONGの通信対戦ができるゲーム。(正常に遊べません。)
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

  data: () => ({
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false
  })

}
</script>
