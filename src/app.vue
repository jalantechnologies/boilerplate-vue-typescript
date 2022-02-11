<template>
  <div class="flex-col d-flex flex-column align-items-center">
    <BaseLabel>Hello World</BaseLabel>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BaseLabel from "./components/base-label/index.vue";
import BaseInput from "./components/base-input/index.vue";

@Options({
  components: {
    BaseLabel,
    BaseInput,
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
