
<template>
  <v-layout
    column
    justify-center
  >
  
    <v-flex
      xs12
      sm8
      md6
    >
    <v-img src="title.png" aspect-ratio="2" contain></v-img>
      <v-card>
        <v-card-title class="headline">
          工事中のこーひーあーるのポートフォリオサイトへよーこそ。
        </v-card-title>
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
