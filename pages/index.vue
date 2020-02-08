
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
    <v-container style="max-width:1000px;">
      <v-img src="title.png" position="center" aspect-ratio="3" contain ></v-img>
    </v-container>
    <v-container>
      <div class="display-4	font-weight-black" style="text-align:center;">HELLO.</div>
    </v-container>
    
     <v-row justify="space-around">
      <span class="group pa-10">
        <v-btn icon=true href="https://twitter.com/plus_marumaru" target="_blank">
          <v-icon x-large>mdi-twitter-circle</v-icon>
        </v-btn>
        <v-btn icon=true href="https://github.com/coffee-r" target="_blank">
          <v-icon  x-large >mdi-github-circle</v-icon>
        </v-btn>
        <v-btn icon=true href="https://coffee-ryo.hatenablog.com/" target="_blank">
          <v-icon x-large>mdi-note-text</v-icon>
        </v-btn>
      </span>
    </v-row>

    
    </v-flex>
  </v-layout>
</template>

<script>

export default {

}
</script>
