<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const isOpen = ref(false);

const router = useRouter()

router.beforeEach(() => {
    isOpen.value = false
})

</script>

<template>
    <header class="w-full">
        <div class="w-5/6 mx-auto flex items-center justify-between py-8">
            <div >
                <img src="/images/logo/logo.svg" alt="Fashion Fit Logo">
            </div>
            <nav>
                <ul class="hidden lg:flex space-x-16 font-bold text-base text">
                    <li>
                        <RouterLink class="text-[#307098]" to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About us</RouterLink>
                    </li>
                    <li>
                        <a href="#">Collections</a>
                    </li>
                    <li>
                        <RouterLink to="/contact-us">Contact us</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="hidden lg:flex space-x-5">
                <img class="w-full h-full object-fit cursor-pointer" src="/images/icons/search.svg" alt="Search Icon">
                <img class="w-full h-full object-fit cursor-pointer" src="/images/icons/person.svg" alt="Person Icon">
                <img class="w-full h-full object-fit cursor-pointer" src="/images/icons/cart.svg" alt="Cart Icon">
                <img class="w-full h-full object-fit cursor-pointer" src="/images/icons/wishlist.svg" alt="Wishlist Icon">
            </div>
            <div @click="isOpen = !isOpen" class="lg:hidden">
                <img src="/images/icons/menu.svg" alt="Menu Bar">
            </div>
            
            <!-- Responsive mobile -->
            <div class="fixed w-full bg-[#FFFFFF] inset-x-0 top-0 z-40 pb-8" v-if="isOpen">
                <div class="flex justify-between pt-8 px-4">
                    <div class="border flex space-x-3 w-4/5 px-4">
                        <img class="w-4" src="/images/icons/search-black.svg" alt="Search Icon">
                        <div class="-full h-full">
                            <input type="text" class="h-full w-full focus:outline-none placeholder:text-xs placeholder:font-medium placeholder:text-[#141415]" placeholder="Search">
                        </div>
                    </div>
                    <div @click="isOpen = !isOpen" class="flex items-center p-4">
                        <img class="w-4" src="/images/icons/close.svg" alt="Close SVG">
                    </div>
                </div>
                <nav>
                    <ul class="py-8 text-[#141415]">
                        <li>
                            <RouterLink class="border-b border-[#CAD7DF] p-4 w-full block" to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="border-b border-[#CAD7DF] p-4 w-full block" to="/about">About us</RouterLink>
                        </li>
                        <li>
                            <a class="border-b border-[#CAD7DF] p-4 w-full block" href="#">Collections</a>
                        </li>
                        <li>
                            <RouterLink class="border-b border-[#CAD7DF] p-4 w-full block" to="/contact-us">Contact us</RouterLink>
                        </li>
                    </ul>
                </nav>

                <div class="px-4 text-[#141415] space-y-3">
                    <div class="flex items-center space-x-2">
                        <img class="w-7 h-7" src="/images/icons/person.svg" alt="Person">
                        <span>My Account</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <img class="w-7 h-7" src="/images/icons/wishlist.svg" alt="Wishlist">
                        <span>My Wishlist</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <img class="w-7 h-7" src="/images/icons/cart.svg" alt="Cart">
                        <span>My Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>