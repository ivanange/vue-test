<template>
  <div class=" w-screen h-screen">
    <div class="">
      <h2 class="text-left text-3xl text-cool-gray-900 font-semibold mb-8 mt-5 px-6">Products/Services</h2>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { Vue } from 'vue-class-component';
export default class Product extends Vue {}
</script>

<style>

</style>