<script setup>
import { ref } from 'vue'

function togglePassword(inputClass)
{
    const input = document.querySelector(inputClass);

     if (input.getAttribute('type') === 'password') input.setAttribute('type', 'text') 
     else input.setAttribute('type', 'password')
}
</script>
<template>
    <section class="pt-28">
        <div class="py-20 w-11/12 lg:w-3/5 mx-auto text-[#141415]">
            <h1 class="font-semibold text-2xl lg:text-4xl leading-[50.4px] text-center">Create an account</h1>
            <form action="#" class="py-10 border-b border-[#B1C4D0]">
                <div class="w-11/12 lg:w-4/5 mx-auto space-y-10">
                    <div>
                        <label for="email" class="font-medium text-base block">
                            Enter your email address
                        </label>
                        <input type="email" id="email" name="email" placeholder="Your email address" class="block w-full p-4 mt-1 border border-[#7798AD] placeholder:text-sm placeholder:text-[#8DA9BB]">
                    </div>
                    <div>
                        <label for="password" class="font-medium text-base block">
                            Create a password
                        </label>
                        <div class="flex justify-between items-center px-4 border border-[#7798AD]">
                            <input type="password" id="password" name="password" placeholder="Enter password" class="block w-full mt-1 py-4 border-0 placeholder:text-sm placeholder:text-[#8DA9BB] focus:outline-0">
                            <img @click="togglePassword('#password')" class="w-6 py-2 cursor-pointer" src="/images/icons/password.svg" alt="Password Icon">
                        </div>
                    </div>
                    <div>
                        <label for="confirm_password" class="font-medium text-base block">
                            Confirm password
                        </label>
                        <div class="flex justify-between items-center px-4 border border-[#7798AD]">
                            <input type="password" id="confirm_password" name="confirm_password" placeholder="Enter password" class="block w-full mt-1 py-4 border-0 placeholder:text-sm placeholder:text-[#8DA9BB] focus:outline-0">
                            <img @click="togglePassword('#confirm_password')" class="w-6 py-2 cursor-pointer" src="/images/icons/password.svg" alt="Password Icon">
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Sign up" class="w-full bg-[#307098] py-3 text-base font-semibold text-[#FFFFFF] cursor-pointer">
                    </div>
                </div>
                <span class="block text-center pt-3 font-semibold text-[#141415] text-sm lg:text-base">By creating an account, you agree to our <a href="#" class="font-medium text-[#307098]">Privacy Policy</a> & <a href="#" class="font-medium text-[#307098]">Terms of use</a></span>
            </form>

            <div class="py-10 text-[#141415] w-4/5 mx-auto space-y-5">
                <h1 class="text-center font-medium text-xl lg:text-2xl">Do you have an account?</h1>
                <div>
                    <a href="#" class="w-full block border border-[#307098] text-center py-3 font-semibold text-[#307098]">
                        Sign in
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>