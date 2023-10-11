
<template>
    <section class="bg-[#FFFFFF] fixed z-[80] lg:w-2/5 lg:h-auto w-full h-full right-0 text-[#141415] text-center">
        <div class="border-b border-[#CAD7DF] relative">
            <h1 class="font-semibold text-xl lg:text-3xl py-5">Your Cart (0)</h1>
            <img @click="$emit('closeCart')"  src="/images/icons/close.svg" alt="Close" class="absolute top-7 cursor-pointer right-10 w-6 h-6">
        </div>
        <div class="py-20">
            <span class="block text-xs lg:text-base font-medium">Your Cart is empty.&#128562;</span>
        </div>
        <div class="lg:pt-5 pt-0 pb-40 space-y-4">
            <span class="block text-xs lg:text-base font-medium">Add items to your cart.</span>
            <a href="#" class="hidden underline lg:block font-semibold text-[#307098]">Shop new collections</a>
        </div>
    </section>
</template>