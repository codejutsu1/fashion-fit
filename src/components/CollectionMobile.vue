<script setup>

</script>
<template> 
    <div class="fixed w-[70%] overflow-y-scroll overflow-x-hidden h-3/5 bg-[#FFFFFF] top-16 right-5 z-[65] pb-8">
        <div>
            <div class="flex justify-between py-4 px-6 sticky top-0 w-full bg-[#FFFFFF]">
                <img @click="$emit('closeMobileCollection')" class="py-2 pr-4" src="/images/icons/back.svg" alt="Back Svg">
                <img @click="$emit('closeMenu')" class="py-2 pl-4" src="/images/icons/close.svg" alt="Close Svg">
            </div>
        <div class="px-6 pt-5">
                <div>
                    <h1 class="text-[#141415] text-base font-semibold">Shop</h1>
                    <ul class="py-3 space-y-2">
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
                    <h1 class="text-[#141415] text-base font-semibold">Categories</h1>
                    <ul class="py-3 space-y-2">
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
                    <h1 class="text-[#141415] text-base font-semibold">Accessories</h1>
                    <ul class="py-3 space-y-2">
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
</template>
