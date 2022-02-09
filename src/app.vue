<template>
  <HelloWorld msg="Welcome to Vue 3 App" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/hello-world/index.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>
