<template>
<div class=" w-screen h-screen flex items-center justify-center bg-gradient-135deg nofade-gradient from-cool-gray-50 to-orange-500">
    <form  class="form rounded-md flex flex-col w-full max-w-sm shadow-lg bg-white px-8 py-10 text-gray-600 border border-gray-50" >
    <h3 class="text-3xl font-bold text-cool-gray-800 mb-10 uppercase"> Sign&nbsp;In</h3>
    <input class="my-2 pl-3 py-2 border rounded"  type="text" id="name" name="name" placeholder="Name" required>
    <input class="my-2 pl-3 py-2 border rounded"  type="email" id="email" name="email" placeholder="Email" required>
    <input class="my-2 pl-3 py-2 border rounded"  type="password" id="password" name="password" placeholder="Password" required>
    <input class="my-2 pl-3 py-2 border rounded"  type="password" id="confirm" name="confirm" placeholder="Confirm Password" required>
    <input class="my-6 pl-3 py-2 border rounded-md text-white font-semibold text-lg transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 focus:ring-1 ring-offset-orange-500"  type="submit" value="Sign In" >
</form>
</div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';

export default class SigIn extends Vue {}
</script>