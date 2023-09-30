<script setup>
import Reviews from '../components/Reviews.vue'

</script>
<template>
  <main class="overflow-hidden">
    <section class="bg-about bg-cover py-14">
      <div class="w-1/2 mx-auto py-14 flex items-center justify-center px-1">
        <div class="text-center">
          <h1 class="text-5xl font-semibold leading-[64.8px] text-[#FFFFFF]">
            How did FASHION FIT become a huge success
          </h1>
          <p class="text-[#FFFFFF] text-2xl py-2">Get inspired as you read about us</p>
          <button class="bg-[#307098] py-3 px-9 mt-10 font-bold leading-5 text-[#FFFFFF]">
            Shop Now
        </button>
        </div>
      </div>
    </section>

    <section class="py-14">
      <div class="w-5/6 mx-auto">
        <div class="relative py-10">
          <div class="ml-32">
            <img class="z-40 relative" src="/images/pictures/picture-3.jpg" alt="Cute Couples">
          </div>
          <div class="flex justify-end bg-[#F1E0D2] absolute top-[15%] py-32">
            <div class="w-1/2">
              <div class="w-[65%] mx-auto text-[#141415]">
                <h1 class="text-4xl font-semibold">Read our Story</h1>
                <span class="py-3 block text-2xl">How did we start?</span>
                <p class="font-normal">
                  Our fashion brand is an online brand that was established in 2010 to enable women access premium wears at an affordable price. Over time, we have evolved and included men as a part of our target audience. We are dedicated to serving fashion needs as best as we can while also ensuring that they are of the best quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#F7EDE5] text-[#141415] py-14">
      <div>
        <h1 class="text-center text-4xl font-semibold">Our Values</h1>
        <p class="text-center text-2xl py-2">What do we cherish?</p>
        <div class="w-3/5 mx-auto pt-10">
          <div class="grid grid-cols-2 justify-between">
            <div class="flex justify-between">
              <div class="w-4/5 justify-end flex items-start">
                <img src="/images/icons/high-quality.svg" alt="High Quality">
              </div>
              <div class="text-[#141415] py-1 pl-2">
                <h1 class="font-semibold text-xl">
                  High Quality
                </h1>
                <span>
                  We are committed to creating high-quality garments using skilled craftsmanship and attention to detail. We use premium materials, and expert tailoring.
                </span>
              </div>
            </div>

            <div class="flex justify-between">
              <div class="w-full flex items-start justify-end">
                <img src="/images/icons/user-first.svg" alt="User Quality">
              </div>
              <div class="text-[#141415] py-1 pl-2">
                <h1 class="font-semibold text-xl">
                  User Quality
                </h1>
                <span class="block">
                  We are committed to putting our customer's needs first. We believe in establishing a good relation with our customers.
                </span>
              </div>
            </div>
          </div>

          <div class="w-1/2 mx-auto pt-10">
            <div class="flex justify-between">
              <div class="w-full flex items-start justify-end">
                <img src="/images/icons/diversity.svg" alt="User Quality">
              </div>
              <div class="text-[#141415] py-1 pl-2">
                <h1 class="font-semibold text-xl">
                  Inclusivity and Diversity
                </h1>
                <span>
                  Our designs are thoughtfully created to celebrate the beauty in every shade, shape, and size. We help everyone find their taste in our collections.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Reviews />

    <section class="bg-[#F9F3EE] py-14">
      <div class="text-center w-1/2 mx-auto text-[#141415]">
        <h1 class="text-4xl font-semibold leading-[50px]">Newsletter</h1>
        <p class="text-2xl  pb-8">Let’s deliver fashion goodness into your inbox</p>
        <input type="email" class="block w-[75%] mx-auto bg-[#FFFFFF] placeholder:text-[#285F81] text-[#285F81] placeholder:text-xs py-5 px-4" placeholder="Enter your email address">
        <button class="bg-[#307098] py-3 px-9 mt-5 font-bold leading-5 text-[#FFFFFF]">
            Subscribe
        </button>
      </div>
    </section>


  </main>
</template>

