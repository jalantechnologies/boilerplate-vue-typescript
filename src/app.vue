<template>
  <SignUp />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SignUp from "./views/sign-up/index.vue";

@Options({
  components: {
    SignUp,
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
