<script setup>
    defineProps({
        label: String
    })
</script>

<template>
    <form action="">
    <div class="flex justify-center">
        <div class="mb-3 xl:w-96">
            <!-- <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"></label> -->
            <input:placeholder="label" type="text" class="
        form-control block
        w-full
        px-3
        py-1.5 
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " id="" />
        </div>
    </div>
</form>
</template>