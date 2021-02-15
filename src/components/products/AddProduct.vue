<template>
    <div class="w-full h-full bg-cool-gray-100 flex items-center justify-center">
        <form @submit.prevent="save"
            class="form rounded-md flex flex-col w-full max-w-md shadow-lg bg-white px-8 py-10 text-cool-gray-500 border border-gray-50">
            <h3 class="text-3xl font-bold text-cool-gray-800 mb-10"> Add a new Product/Service</h3>
            <input class="my-2 pl-3 py-2 border rounded" type="text" v-model="product.name" id="name" name="name"
                placeholder="Name" required>
            <input class="my-2 pl-3 py-2 border rounded" type="number" v-model="product.price" id="price" name="price"
                placeholder="Price" required>
            <textarea class="my-2 pl-3 py-2 border rounded" v-model="product.description" name="description"
                id="description" cols="30" rows="3">
                Product/Service description
            </textarea>
            <!-- <v-image-input  @input="product.image = $event" clearable /> -->
            <label for="service" class="text-left my-1">
                <input type="checkbox" v-model="service"  name="service" id="service">
                Service
            </label>
            <input
                class="my-6 pl-3 py-2 border rounded-md text-white font-semibold text-lg transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600 focus:ring-1 ring-offset-orange-500"
                type="submit" value="Save">
        </form>
    </div>
</template>

<script>
    import VImageInput from 'vuetify-image-input';
    export default {
        components: {
            [VImageInput.name]: VImageInput,
        },

        data() {
            return {
                product: {
                    name: null,
                    description: null,
                    price: null,
                    type: 'product',
                    images: []
                }
            }
        },

        computed: {
            service: {
                get() {
                    return this.product.type == 'service';
                },
                set(isSerive) {
                    this.product.type = isSerive ? 'service' : 'product';
                }
            }
        },

        methods: {
            onChange(url) {
                this.product.images.push(url);
            },
            save() {
                // save product to backend
                this.$router.push('/products')
            }
        }
    }
</script>

<style>

</style>