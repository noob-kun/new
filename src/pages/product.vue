<template>
    <div>
    
        <strong>product page</strong>
        <form>
            <div class="mb-3">
                <label>Product Name</label>
                <input type="text" v-model= "Product.Name" class="block border  hover:border-[#b2b2b2] border-[#EAEAEA] focus:ring-0 w-full px-4 py-2 focus:border-[#4D4D4D]">
            </div>
            <div class="mb-2">
                <label>price</label>
                <input type="text" v-model= "Product.price" class="block border  hover:border-[#b2b2b2] border-[#EAEAEA] focus:ring-0 w-full px-4 py-2 focus:border-[#4D4D4D]">
            </div>
            <div class="mb-1">
                <label>Product descreption</label>
                <input type="text" v-model= "Product.descreption" class="block border  hover:border-[#b2b2b2] border-[#EAEAEA] focus:ring-0 w-full px-4 py-2 focus:border-[#4D4D4D]">
            </div>
        </form> 
    </div>
</template>
<script >
export default {
    data() {
        return{ 
            Product: {
                Name: "",
                price: "",
                descreption: ""
            }
        }
    },
    methods: {
        saveProducts(){
            
        }
    }
}
</script>