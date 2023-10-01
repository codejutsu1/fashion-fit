<script setup>

</script>

<template>
    <header class="w-full">
        <div class="w-5/6 mx-auto flex items-center justify-between py-8">
            <div>
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
            <div class="lg:hidden">
                <img src="/images/icons/menu.svg" alt="Menu Bar">
            </div>
        </div>
    </header>
</template>