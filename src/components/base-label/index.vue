<template>
  <div class="column full-width justify-center items-center">
    <q-img
      :src="require('@/assets/logo.png')"
      spinner-color="white"
      class="logo"
    />
    <p class="text-h1 text-weight-bold text-primary"><slot /></p>
  </div>
</template>

<script src="./main.ts" lang="ts"/>
<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped/>
