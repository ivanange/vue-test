<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signin">Sign In</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/products">Products</router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
