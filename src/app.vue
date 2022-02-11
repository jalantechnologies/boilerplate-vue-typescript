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

<style lang="scss">
// Todo: Need to remove this later. Rn global css is not loading without this.
#app {
  display: block;
}
</style>
