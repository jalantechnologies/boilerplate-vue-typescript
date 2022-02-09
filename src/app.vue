<template>
  <BaseLabel>Hello World</BaseLabel>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseLabel from "./components/base-label/index.vue";

@Options({
  components: {
    BaseLabel,
  },
})
export default class App extends Vue {}
</script>
