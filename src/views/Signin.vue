<script setup>
import { ref } from 'vue';


const inputField = ref('password')

function togglePassword()
{
    inputField.value === 'password' ? inputField.value = 'text' : inputField.value = 'password'
}
</script>
<template>
     <section class="lg:pt-28 relative z-[60] lg:z-30 bg-[#FFFFFF]">
        <div class="lg:py-20 py-5 w-11/12 lg:w-3/5 mx-auto text-[#141415]">
            <div class="absolute top-[35px] left-10" @click="$router.go(-1)">
                <img class="w-6 h-6" src="/images/icons/back.svg" alt="Back">
            </div>
            <h1 class="font-semibold text-2xl lg:text-4xl leading-[50.4px] text-center">Sign in</h1>
            <div class="absolute top-[35px] right-10" @click="$router.push('/')">
                <img class="w-6 h-6" src="/images/icons/close.svg" alt="Close">
            </div>
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
                            Enter your password
                        </label>
                        <div class="flex justify-between items-center px-4 border border-[#7798AD]">
                            <input :type="inputField" id="password" name="password" placeholder="Enter password" class="block w-full mt-1 py-4 border-0 placeholder:text-sm placeholder:text-[#8DA9BB] focus:outline-0">
                            <img @click="togglePassword()" class="w-6 py-2 cursor-pointer" src="/images/icons/password.svg" alt="Password Icon">
                        </div>
                    </div>
                    <div>
                        <input type="submit" value="Sign in" class="w-full bg-[#307098] py-3 text-base font-semibold text-[#FFFFFF] cursor-pointer">
                    </div>
                </div>
                <div class="w-11/12 lg:w-4/5 mx-auto pt-4 flex items-center space-x-2">
                    <input type="checkbox" class="w-6 h-6 text-[#141415] border border-[#141415]">
                    <span class="text-xs lg:text-base font-medium text-[#285F81]">Remember me</span>
                </div>
            </form>

            <div class="py-10 text-[#141415] w-4/5 mx-auto space-y-5">
                <h1 class="text-center font-medium text-xl lg:text-2xl">New to Flair?</h1>
                <div>
                    <RouterLink to="signup" class="w-full block border border-[#307098] text-center py-3 font-semibold text-[#307098]">
                        Create an account
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>