<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          こーひーあーるのポートフォリオサイト
        </v-card-title>
        <v-card-text>
          Re Painter<br/>
          ぱりんぱりん惑星<br/>
          その他作った物<br/>
          <div class="text-xs-right">
          </div>
          <hr class="my-3">
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            color="primary"
            nuxt
            to="/Contact"
          >
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {

}
</script>
