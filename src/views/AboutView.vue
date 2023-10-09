<script setup>
import Reviews from '../components/Reviews.vue'

</script>
<template>
  <main class="overflow-hidden pt-28">
    <section class="bg-about bg-center bg-cover py-10 lg:py-14">
      <div class="lg:w-1/2 mx-auto lg:py-14 flex items-center justify-center px-5 lg:px-1">
        <div class="relative text-center">
          <h1  data-aos="fade-down-right" data-aos-duration="700" data-aos-delay="0" class="text-2xl lg:text-5xl font-semibold lg:leading-[64.8px] text-[#FFFFFF]">
            How did FASHION FIT become a huge success
          </h1>
          <Transition></Transition>
          <p data-aos="fade-down-right" data-aos-duration="700" class="text-[#FFFFFF] text-base lg:text-2xl py-2">Get inspired as you read about us</p>
          <button data-aos="fade-down-left" data-aos-duration="700" class="bg-[#307098] py-3 px-9 mt-10 font-bold leading-5 text-[#FFFFFF] hover:bg-[#215373]">
            Shop Now
          </button>
        </div>
      </div>
    </section>

    <section class="py-14">
      <div class="w-5/6 mx-auto">
        <div class="relative py-10 space-y-5 lg:space-y-0">
          <div class="mx-4 lg:ml-32">
            <img class="z-30 relative" src="/images/pictures/picture-3.jpg" alt="Cute Couples">
          </div>
          <div class="lg:flex justify-end bg-[#F1E0D2] lg:absolute lg:top-[15%] py-10 lg:py-32">
            <div class="lg:w-1/2">
              <div class="lg:w-[65%] px-4 lg:px-0 mx-auto text-[#141415]">
                <h1 class="text-2xl lg:text-4xl font-semibold">Read our Story</h1>
                <span class="py-3 block text-base lg:text-2xl">How did we start?</span>
                <p class="font-normal text-sm lg:text-base">
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
        <h1 class="text-center text-2xl lg:text-4xl font-semibold">Our Values</h1>
        <p class="text-center text-base lg:text-2xl py-2">What do we cherish?</p>
        <div class="lg:w-3/5 w-5/6 mx-auto pt-10">
          <div class="lg:grid grid-cols-2 justify-between space-y-4 lg:space-x-5">
            <div class="lg:flex justify-between">
              <div class="lg:w-4/5 justify-center lg:justify-end flex items-start">
                <img src="/images/icons/high-quality.svg" alt="High Quality">
              </div>
              <div class="text-[#141415] py-1 lg:pl-2 text-center lg:text-left">
                <h1 class="font-semibold text-base lg:text-xl">
                  High Quality
                </h1>
                <span class="text-sm lg:text-base py-2 lg:py-0 block">
                  We are committed to creating high-quality garments using skilled craftsmanship and attention to detail. We use premium materials, and expert tailoring.
                </span>
              </div>
            </div>

            <div class="lg:flex justify-between">
              <div class="lg:w-full flex items-start justify-center lg:justify-end">
                <img src="/images/icons/user-first.svg" alt="User Quality">
              </div>
              <div class="text-[#141415] py-1 lg:pl-2 text-center lg:text-left">
                <h1 class="font-semibold text-base lg:text-xl">
                  User Quality
                </h1>
                <span class="text-sm lg:text-base py-2 lg:py-0 block">
                  We are committed to putting our customer's needs first. We believe in establishing a good relation with our customers.
                </span>
              </div>
            </div>
          </div>

          <div class="lg:w-1/2 mx-auto lg:pt-10">
            <div class="lg:flex justify-between">
              <div class="lg:w-full flex items-start justify-center lg:justify-end">
                <img src="/images/icons/diversity.svg" alt="User Quality">
              </div>
              <div class="text-[#141415] py-1 lg:pl-2 text-center lg:text-left">
                <h1 class="font-semibold text-base lg:text-xl">
                  Inclusivity and Diversity
                </h1>
                <span class="text-sm lg:text-base py-2 lg:py-0 block">
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
      <div class="text-center w-11/12 lg:w-1/2 mx-auto text-[#141415]">
        <h1 class="lg:text-4xl text-2xl font-semibold leading-[50px]">Newsletter</h1>
        <p class="lg:text-2xl text-base pb-8">Let’s deliver fashion goodness into your inbox</p>
        <input type="email" class="block w-11/12 lg:w-[75%] mx-auto bg-[#FFFFFF] placeholder:text-[#285F81] text-[#285F81] placeholder:text-xs py-5 px-4" placeholder="Enter your email address">
        <button class="bg-[#307098] py-3 px-9 mt-5 font-bold leading-5 text-[#FFFFFF] hover:bg-[#215373]">
            Subscribe
        </button>
      </div>
    </section>


  </main>
</template>

