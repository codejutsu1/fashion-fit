<script setup>

const emit = defineEmits(['closeCart', 'closeMenu'])
function backPage(){
    emit('closeCart')
    emit('closeMenu')
}
</script>
<template>
    <section class="bg-[#FFFFFF] fixed z-[80] lg:w-2/5 lg:h-4/5 w-full h-full right-0 text-[#141415] text-center">
        <div class="border-b border-[#CAD7DF] relative w-full">
            <div class="w-4/5 mx-auto lg:block flex justify-between items-center"> 
                <div>
                    <img @click="$emit('closeCart')" src="/images/icons/back.svg" alt="Back" class="cursor-pointer block lg:hidden p-2 pl-0">  
                </div>  

                <h1 class="font-semibold text-xl lg:text-3xl py-5">Your Cart (0)</h1>

                <div class="flex justify-end">
                    <img @click="backPage" src="/images/icons/close.svg" alt="Close" class="cursor-pointer block lg:absolute top-5 right-8 p-4 pr-0">
                </div>
            </div>
        </div>
        <div class="py-20 w-4/5 mx-auto">
            <span class="block text-sm lg:text-base font-medium text-center">Your Cart is empty.&#128562;</span>
        </div>
        <div class="lg:pt-5 pt-0 pb-40 space-y-4">
            <span class="block text-sm lg:text-base font-medium">Add items to your cart.</span>
            <a href="#" class="hidden underline lg:block font-semibold text-[#307098]">Shop new collections</a>
            <a href="#" class="bg-[#307098] py-3 px-9 inline-block font-semibold text-[#FFFFFF] lg:hidden">Shop now</a>
        </div>
    </section>
</template>