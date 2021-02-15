<template>
<div class=" px-6 py-3">
    <router-link to="/products/new" class=" text-xl text-center font-semibold bg-cool-gray-400 rounded-md text-white flex flex-col justify-center items-center w-40 h-40 px-5 mb-8">
        <svg class="text-cool-gray-300 fill-current w-10 h-10" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-32 252c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92H92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" class=""></path></svg>
        Add a Product/Service
    </router-link>
    <div class="flex flex-wrap justify-between">
        <router-link :to="'/products/'+i" class=" rounded-md h-fit max-w-xs min-w-xs flex flex-col border shadow" v-for="(product, i) in products" :key="i">
            <img class="w-full h-auto rounded-t-md" :src="product.image" alt="" srcset="">
            <div class="mt-auto px-3 pt-5 pb-3 text-left">
                <div class="flex justify-between font-bold text-cool-gray-800 mb-2">
                    <span class="text-xl">{{product.name}}</span>
                    <span class="dollar text-lg">{{product.price}}</span>
                </div>
                <div class=" text-sm">
                    {{product.description}}
                </div>
                <h5 class=" font-medium text-cool-gray-400 capitalize pt-2">
                    {{product.type}}
                </h5>
            </div>
        </router-link>
    </div>
</div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import products from '@/products';

export default class ProducList extends Vue {
    data() {
        return {
            products: products
        }
    }
}
</script>