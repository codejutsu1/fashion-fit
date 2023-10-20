<script setup>

const emit = defineEmits(['closeWishlist', 'closeMenu'])
function backPage(){
    emit('closeWishlist')
    emit('closeMenu')
}
</script>
<template>
    <section class="bg-[#FFFFFF] fixed z-[80] lg:w-2/5 lg:h-5/6 w-full h-full right-0 text-[#141415] text-center">
        <div class="border-b border-[#CAD7DF] relative w-full">
            <div class="w-4/5 mx-auto lg:block grid grid-cols-3 justify-between items-center"> 
                <div>
                    <img @click="$emit('closeWishlist')" src="/images/icons/back.svg" alt="Back" class="cursor-pointer block lg:hidden">  
                </div>  
                <h1 class="font-semibold text-xl lg:text-3xl py-5 text-center">Wishlist</h1>

                <div class="flex justify-end">
                    <img @click="backPage" src="/images/icons/close.svg" alt="Close" class="cursor-pointer block lg:absolute top-5 right-8 p-4 pr-0">
                </div>
            </div>
        </div>
        <div class="py-20">
            <span class="block text-sm lg:text-base font-medium">Your wishlist is currently empty.&#128562;</span>
        </div>
        <div class="lg:pt-5 pt-0 pb-40 space-y-4">
            <a href="#" class="hidden underline lg:block font-semibold text-[#307098]">Shop new collections</a>
            <a href="#" class="bg-[#307098] py-3 px-9 inline-block font-semibold text-[#FFFFFF] lg:hidden">Explore</a>
        </div>
    </section>
</template>