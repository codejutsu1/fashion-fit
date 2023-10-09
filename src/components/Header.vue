<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';

const isOpen = ref(false);
const collectionOpen = ref(false)
const body = document.querySelector("body"); 

const router = useRouter()

router.beforeEach(() => {
    isOpen.value = false
    collectionOpen.value = false
})

function collection(){
    collectionOpen.value = !collectionOpen.value
    return collectionOpen.value ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
}


function removeCollection() {
    body.style.overflow = 'auto'
    collectionOpen.value = false
}

</script>

<template>
    <header class="w-full fixed z-40 bg-white header-shadow">
        <div class="relative w-5/6 mx-auto flex items-center justify-between py-8">
            <div >
                <img src="/images/logo/logo.svg" alt="Fashion Fit Logo">
            </div>
            <nav>
                <ul class="hidden lg:flex space-x-16 font-normal text relative z-50">
                    <li>
                        <RouterLink  to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About us</RouterLink>
                    </li>
                    <li>
                        <button @click="collection">Collections</button>
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
            <div class="fixed w-[70%] bg-[#FFFFFF] top-16 right-0 z-40 pb-8 transition ease-in duration-500" v-if="isOpen">
                <!-- <div class="fixed bg-[#D9D9D9] inset-x-0 inset-y-0 overflow-hidden opacity-40"></div> -->
                <div class="flex justify-between pt-8 px-4">
                    <div class="border flex space-x-3 w-4/5 px-4 res-search-input">
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
                    <ul class="pt-4 pb-8 text-[#141415]">
                        <li>
                            <RouterLink class="border-b border-[#CAD7DF] px-4 py-3 w-full block" to="/">Home</RouterLink>
                        </li>
                        <li>
                            <RouterLink class="border-b border-[#CAD7DF] px-4 py-3 w-full block" to="/about">About us</RouterLink>
                        </li>
                        <li class="flex justify-between items-center pr-8 border-b border-[#CAD7DF]">
                            <a class=" px-4 py-3 w-full block" href="#">Collections</a>
                            <img src="/images/icons/right.svg" alt="Right">
                        </li>
                        <li>
                            <RouterLink class="border-b border-[#CAD7DF] px-4 py-3 w-full block" to="/contact-us">Contact us</RouterLink>
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

            <!-- Collection Menu -->
            <div class="absolute w-full bg-[#FFFFFF] -bottom-80 z-50" :class="{'hidden' : !collectionOpen, 'block': collectionOpen}">
                <div class="flex justify-between mx-auto py-10 px-28">
                    <div>
                        <h1 class="text-[#141415] text-xl font-semibold">Shop</h1>
                        <ul class="py-5 space-y-2">
                            <li>
                                <a href="#">
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Men
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Women
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    New Collection
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Top Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Sales
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 class="text-[#141415] text-xl font-semibold">Categories</h1>
                        <ul class="py-5 space-y-2">
                            <li>
                                <a href="#">
                                    Playsuits
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Men's suit
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dresses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Skirts
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shorts
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Beach Wear
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 class="text-[#141415] text-xl font-semibold">Accessories</h1>
                        <ul class="py-5 space-y-2">
                            <li>
                                <a href="#">
                                    Bags
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Jewelries
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shoes
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Watches
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Sunglasses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Belts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div @click="removeCollection" class="inset-y-0 inset-x-0 z-40" :class="{'hidden' : !collectionOpen, 'fixed': collectionOpen}"></div>
    </header>
</template>

<style>
.header-shadow{
    box-shadow: 0px 2px 12px 0px #1414150F;
}
</style>
