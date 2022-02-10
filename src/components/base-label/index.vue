<template>
  <div class="flex-col d-flex flex-column align-items-center">
    <img
      :src="require('@/assets/logo.png')"
      style="height: 100px; width: 100px"
    />
    <p class="h1"><slot /></p>
  </div>
</template>
<script src="./main.ts" lang="ts"/>
