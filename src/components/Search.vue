<template>
    <section class="bg-[#FFFFFF] hidden lg:block lg:fixed w-full pt-12 pb-28 top-0 lg:z-[70]">
        <div class="w-11/12 mx-auto">
            <div class="border-b flex items-center pb-2">
                <img src="/images/icons/black-search.svg" alt="Search Icon">
                <input type="text" class="w-full border-0 focus:outline-0 mx-2 placeholder:font-medium font-medium placeholder:text-[#141415] text-[#141415]" placeholder="Search FASHIONFIT" autofocus>
                <img @click="$emit('closeSearch')" class="px-2 py-1 cursor-pointer" src="/images/icons/close.svg" alt="Close Icon">
            </div>
        </div>
    </section>
</template>