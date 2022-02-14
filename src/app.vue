<template>
  <BaseLabel>Hello World</BaseLabel>
  <div class="col-lg-4 col-sm-6">
    <base-input placeholder="Regular"> </base-input>
    <base-input placeholder="Search" addon-left-icon="ni ni-zoom-split-in">
    </base-input>
  </div>
  <div class="col-lg-4 col-sm-6">
    <base-input placeholder="Regular" disabled> </base-input>
    <base-input placeholder="Birthday" addon-right-icon="ni ni-zoom-split-in">
    </base-input>
  </div>
  <div class="col-lg-4 col-sm-6">
    <base-input placeholder="Success" :valid="true"> </base-input>
    <base-input placeholder="Success" :valid="false"> </base-input>
  </div>
  <base-input placeholder="Email" addon-left-icon="ni ni-email-83">
  </base-input>
  <base-input type="password" placeholder="Password" :valid="true">
  </base-input>
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
