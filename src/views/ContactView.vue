<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'


</script>

<template>
    <main class="pt-28">
        <section class="bg-contact h-screen bg-cover bg-center bg-no-repeat flex items-end">
            <div class="w-1/2 mx-auto flex justify-center h-2/5">
                <div class="text-[#141415]">
                    <span class="block text-2xl text-center ">Need help?</span>
                    <p class="text-5xl leading-[67px] text-center font-semibold">Get in touch</p>
                </div>
            </div>
        </section>

        <section class="py-14">
            <div class="lg:w-3/5 w-4/5 mx-auto text-[#141415]">
                <h1 class="lg:text-2xl text-xl font-medium text-center">Do you have any enquires?</h1>
                <p class="text-center text-sm lg:text-base font-light py-3">We are available 24 hours, 7 days.</p>

                <div class="lg:flex pt-10 justify-between">
                    <div class="flex justify-between lg:gap-x-5">
                        <div class="w-[100px] h-[100px] p-[30px] rounded-[60px] bg-[#F7EDE5] contact flex items-center justify-center">
                            <img src="/images/icons/phone.svg" alt="Phone">
                        </div>
                        <div>
                            <h1 class="lg:text-xl text-base font-medium">Give us a call today!</h1>

                            <div class="pt-4 text-[#2BA646] space-y-1 font-medium">
                                <span class="block">
                                    +2348103704179
                                </span>
                                <span class="block">
                                    +2349012347654
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="w-2/5 flex gap-x-5">
                        <div class="w-[100px] h-[100px] p-[30px] rounded-[60px] bg-[#F7EDE5] contact flex items-center justify-center">
                            <img src="/images/icons/email.svg" alt="Email">
                        </div>

                        <div>
                            <h1 class="text-xl font-medium">You can send a mail.</h1>
                            <span class="pt-4 text-[#2BA646] space-y-1 font-medium block underline">
                                fashionfit@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>