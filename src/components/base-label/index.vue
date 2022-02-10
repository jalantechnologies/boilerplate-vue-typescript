<template>
  <div class="flex-col d-flex flex-column align-items-center">
    <img :src="require('@/assets/logo.png')" class="logo" />
    <p class="h1"><slot /></p>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
<style lang="scss" rel='stylesheet/scss' src="./style.scss" scoped/>
