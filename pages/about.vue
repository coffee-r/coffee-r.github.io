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
    
          <v-avatar
              class="profile"
              color="grey"
              size="164"
            >
              <v-img src="../avater.png"></v-img>
            </v-avatar>
        <v-card-title class="headline">
          こーひーあーるのポートフォリオサイト
        </v-card-title>
        <v-card-text>
          なんか良い感じの自己紹介<br/>
          なんか良い感じの経歴<br/>
          なんか良い感じにやってきたこと<br/>
          なんか良い感じのできること出来ないこと<br/>
          なんか良い感じの持っている技術<br/>
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
