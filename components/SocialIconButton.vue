<template>
  <span class="px-5">
        <v-btn icon :href="url" target="_blank">
          <v-icon size="48">{{ name }}</v-icon>
        </v-btn>
      </span>
</template>

<script>
export default {
  props: {
    url: String,
    name: String
  }
}
</script>