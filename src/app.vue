<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SignUp from "./views/sign-up/index.vue";
import { Routes } from "@/router/routes";

@Options({
  components: {
    SignUp,
  },
  data() {
    return { Routes };
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
