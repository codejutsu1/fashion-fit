<script setup>

</script>

<template>
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
            <div class="border-b border-[#141415] lg:border-0 w-full lg:py-0 py-3 pt-10 lg:pt-0 flex justify-between px-4 lg:px-0">
              <h1 class="font-semibold text-base lg:text-xl">About</h1>
              <img class="lg:hidden" src="/images/icons/dropdown-2.svg" alt="Dropdown">
            </div>
            <ul class="py-4 space-y-2 text-xs lg:text-base hidden lg:block">
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
            <div class="border-b border-[#141415] lg:border-0 w-full lg:py-0 py-3 flex justify-between px-4 lg:px-0">
              <h1 class="font-semibold text-base lg:text-xl">Product</h1>
              <img class="lg:hidden" src="/images/icons/dropdown-2.svg" alt="Dropdown">
            </div>
            <ul class="py-4 space-y-2 text-xs lg:text-base hidden lg:block">
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
        <div class="text-[#141415] text-xs font-medium text-center py-5">
          <p>2023 FASHION FIT All right reserved. Designed by <a href="https://twitter.com/AvoDesigns_" target="_blank" class="underline">Adenike Abioye</a></p>
          <p>Developed with TailwindCSS, VueJs and &#10084; by <a href="https://github.com/codejutsu1" target="_blank" class="underline">Codejutsu</a>.</p>
        </div>
      </div>
    </footer>
</template>