<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const aboutDropdown = ref(false)
const productDropdown = ref(false)

const router = useRouter()

router.beforeEach(() => {
    aboutDropdown.value = productDropdown.value = false
})

</script>

<template>
    <a href="https://wa.me/+2347080119082" target="_blank" class="w-14 h-14 lg:w-auto lg:h-auto justify-center fixed flex gap-2 items-center py-4 px-5 rounded-[40px] landing bg-[#FFFFFF] bottom-5 lg:bottom-10 right-5 lg:right-10">
      <img class="w-7" src="/images/socials/whatsapp.svg" alt="Whatsapp">
      <span class="hidden lg:block text-xl font-medium text-[#0A3B5A]">Chat with an expert</span>
    </a>
    <footer class="bg-[#F3E5D9]">
      <div>
        <div class="lg:w-5/6 mx-auto lg:flex justify-between space-y-3 lg:space-y-0 py-10">
          <div class="px-4 lg:px-0 space-y-4">
            <img src="/images/logo/logo.svg" alt="Logo">
            <div class="inline-block lg:w-full py-3 px-4 border border-[#141415] bg-transparent lg:flex space-x-2">
              <span class="font-medium text-[#0A3B5A]">English</span>
              <img class="inline-block" src="/images/icons/dropdown.svg" alt="Dropdown">
            </div>
          </div>

          <div class="text-[#141415]">
            <div
              @click="aboutDropdown = !aboutDropdown" 
              :class="{'border-0' : aboutDropdown, 'border-b' : !aboutDropdown}"
              class="border-[#141415] lg:border-0 w-full lg:py-0 py-3 pt-10 lg:pt-0 flex justify-between px-4 lg:px-0"
            >
              <h1 class="font-semibold text-base lg:text-xl">About</h1>
              <img v-if="!aboutDropdown" class="lg:hidden" src="/images/icons/dropdown-2.svg" alt="Dropdown">
              <img v-if="aboutDropdown" class="lg:hidden" src="/images/icons/dropup.svg" alt="Dropup">
            </div>
            <ul 
              :class="{'block' : aboutDropdown, 'hidden' : !aboutDropdown}"
              class="py-4 px-4 lg:px-0 space-y-2 text-xs lg:text-base lg:block border-b border-[#141415]"
            >
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Legal</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div class="text-[#141415]">
            <div @click="productDropdown = !productDropdown" 
                  :class="{'border-0' : productDropdown, 'border-b' : !productDropdown}"
                   class="border-[#141415] lg:border-0 w-full lg:py-0 py-3 flex justify-between px-4 lg:px-0 transition duration-500"
            >
              <h1 class="font-semibold text-base lg:text-xl">Product</h1>
              <img v-if="!productDropdown" class="lg:hidden" src="/images/icons/dropdown-2.svg" alt="Dropdown">
              <img v-if="productDropdown" class="lg:hidden" src="/images/icons/dropup.svg" alt="Dropup">
            </div>
            <ul class="py-4 px-4 lg:px-0 space-y-2 text-xs lg:text-base lg:block border-b border-[#141415]" :class="{'block' : productDropdown, 'hidden' : !productDropdown}">
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">New in</a>
              </li>
            </ul>
          </div>

          <div class="text-[#141415] px-4 lg:px-0 pt-10 lg:pt-0">
            <h1 class="font-semibold text-base lg:text-xl">Connect with us</h1>
            <ul class="flex space-x-5 py-5">
              <li>
                <a href="#">
                  <img class="w-full h-full object-fit" src="/images/socials/twitter.svg" alt="Twiiter">
                </a>
              </li>
              <li>
                <a href="#">
                  <img class="w-full h-full object-fit" src="/images/socials/facebook.svg" alt="Facebook">
                </a>
              </li>
              <li>
                <a href="#">
                  <img class="w-full h-full object-fit" src="/images/socials/instagram.svg" alt="Instagram">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr class="border border-[#82776D]">
        <div class="text-[#141415] text-xs font-medium text-center py-5 space-y-2">
          <p>2023 FASHION FIT All right reserved. Designed by <a href="https://twitter.com/AvoDesigns_" target="_blank" class="underline">Adenike Abioye</a></p>
          <p>Developed with TailwindCSS, VueJs and &#10084; by <a href="https://github.com/codejutsu1" target="_blank" class="underline">Codejutsu</a>.</p>
        </div>
      </div>
    </footer>
</template>