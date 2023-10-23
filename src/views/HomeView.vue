<script setup>
import Reviews from '../components/Reviews.vue'
import Collection from '../components/Collection.vue'
import NewCollection from '../components/NewCollection.vue'

</script>
<template>
  <main class="overflow-x-hidden pt-28">
    <section class="lg:pt-12 pt-3 pb-10 w-full lg:w-5/6 mx-auto">
      <div class="relative text-center text-[#141415]">
        <h1 class="text-4xl lg:text-6xl font-bold lg:leading-[89.6px] px-8 left">Find your <span class="text-[#FFCC4D]">style</span> in our collection</h1>
        <div class="text-center w-4/5 lg:w-3/5 px-1 mx-auto pt-2 lg:pt-0">
          <p class="text-base lg:text-2xl lg:leading-9 left">Fashion is a way of life. Experience fashion at its best as you shop from our collections </p>
        </div>
        <Transition ></Transition>
        <button class="bg-[#307098] h-[48px] w-[190px] mt-5 lg:mt-10 font-semibold leading-5 text-[#FFFFFF] hover:bg-[#215373] right">
          Shop Now
        </button>
      </div>
      <div class="pt-10">
        <div class="relative">
          <img class="md:block hidden w-full h-full object-fit fade-in" src="/images/pictures/picture-1.jpg" alt="Landing page Image">
          <img class="md:hidden w-full h-full object-fit fade-in" src="/images/pictures/picture-1-res.jpg" alt="Landing page Image">
        </div>
      </div>
    </section>

    <NewCollection />

    <section class="py-14">
      <div class="w-5/6 mx-auto lg:flex justify-between">
        <div class="lg:w-[70%] w-auto">
          <img class="w-full h-full object-fit" src="/images/pictures/picture-2.jpg" alt="A young woman smiling holding a bottle.">
        </div>
        <div class="flex items-center justify-center pt-4 lg:pt-0">
          <div class="text-center px-2 lg:px-10">
            <h1 class="text-2xl lg:text-4xl font-semibold lg:leading-[50px] text-outfit">Outfit for every occassion</h1>
            <p class="text-base pt-2 lg:text-2xl">Explore outfits that are perfect for your next beach outing</p>
            <div class="flex justify-center pt-5">
              <button class="bg-[#307098] h-[48px] w-[190px] mx-auto font-semibold leading-5 text-[#FFFFFF] hover:bg-[#215373]">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Collection />

    <Reviews />

    <section class="bg-[#FDFBF9] py-14">
      <div class="w-5/6 mx-auto">
        <h1 class="text-2xl lg:text-4xl font-semibold lg:leading-[50px] text-center">Benefits</h1>
        <p class="text-center text-base lg:text-2xl pt-2 lg:pt-4">Why patronize us?</p>
        <div class="grid grid-cols-2 lg:grid-cols-4 justify-between py-10 mx-auto lg:px-10 text-[#141415]">
          <div>
            <div class="flex justify-center">
              <div class="w-32 h-32 rounded-full bg-[#EEF2F5] flex justify-center items-center">
                <img src="/images/icons/delivery.svg" alt="Prompt Delivery">
              </div>
            </div> 
            <div class="lg:px-8">
              <h1 class="text-center py-2 font-bold text-sm lg:text-base">Prompt Delivery</h1>
              <p class="font-medium text-xs text-center">You get your orders without delay</p>
            </div>
          </div>

          <div>
            <div class="flex justify-center">
              <div class="w-32 h-32 rounded-full bg-[#EEF2F5] flex justify-center items-center">
                <img src="/images/icons/quality.svg" alt="Prompt Delivery">
              </div>
            </div> 
            <div class="lg:px-8">
              <h1 class="text-center py-2 font-bold text-sm lg:text-base">Quality Products</h1>
              <p class="font-medium text-xs text-center">Our products are super affordable and of good quality</p>
            </div>
          </div>

          <div>
            <div class="flex justify-center">
              <div class="w-32 h-32 rounded-full bg-[#EEF2F5] flex justify-center items-center">
                <img src="/images/icons/support.svg" alt="Prompt Delivery">
              </div>
            </div> 
            <div class="lg:px-8">
              <h1 class="text-center py-2 font-bold text-sm lg:text-base">Customer support 24/7</h1>
              <p class="font-medium text-xs text-center">We are ready to help you with any challenge.</p>
            </div>
          </div>

          <div>
            <div class="flex justify-center">
              <div class="w-32 h-32 rounded-full bg-[#EEF2F5] flex justify-center items-center">
                <img src="/images/icons/discount.svg" alt="Prompt Delivery">
              </div>
            </div> 
            <div class="lg:px-8">
              <h1 class="text-center py-2 font-bold text-sm lg:text-base">10% off first order</h1>
              <p class="font-medium text-xs text-center">Special discount for all new clients</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section class="bg-[#F9F3EE] py-14">
      <div>
        <h1 class="text-2xl lg:text-4xl font-semibold lg:leading-[50px] text-center">Our Blog</h1>
        <p class="text-center text-base lg:text-2xl pt-2">Stay to date about fashion</p>

        <div class="w-11/12 md:grid grid-cols-3 mx-auto pt-10 gap-8">
          <div>
            <div class="border border-[#F1E0D2]">
              <img class="object-fit w-full h-full" src="/images/blog/blog-1.jpg" alt="A woman holding some set of clothes.">
            </div>
            <div class="py-4 text-[#141415]">
              <span class="font-medium text-base lg:text-xl">
                The ultimate fashion guide is here...
              </span>
              <p class="py-2 text-xs lg:text-base">
                The ultimate fashion guide will help you to learn how to put your outfits together and look great without breaking the bank. Save more and shop ... <span class="underline font-semibold text-[#307098]">Read More</span>
              </p>
            </div>
          </div>

          <div>
            <div class="border border-[#F1E0D2]">
              <img class="object-fit w-full h-full" src="/images/blog/blog-2.jpg" alt="A beautiful woman in pink.">
            </div>
            <div class="py-4 text-[#141415]">
              <span class="font-medium text-base lg:text-xl">
                The Beauty of Monochromic outfits...
              </span>
              <p class="py-2 text-xs lg:text-base">
                Monochromic fashion can never go wrong, learn how to style your outfits to produce great looks. The first thing you need to know about this is you... <span class="underline font-semibold text-[#307098]">Read More</span>
              </p>
            </div>
          </div>

          <div>
            <div class="border border-[#F1E0D2]">
              <img class="object-fit w-full h-full" src="/images/blog/blog-3.jpg" alt="A well designed picture with leaves.">
            </div>
            <div class="py-4 text-[#141415]">
              <span class="font-medium text-base lg:text-xl">
                Pick the right accessories for your outfits...
              </span>
              <p class="py-2 text-xs lg:text-base">
                Pairing your outfits with the right accessories is a great way to upscale your fashion sense and look outstanding. Accessories are very ... <span class="underline font-semibold text-[#307098]">Read More</span>
              </p>
            </div>
          </div>
        </div>

        <div class="flex justify-center py-2">
          <button class="bg-[#307098] h-[48px] w-[190px] mx-auto font-semibold leading-5 text-[#FFFFFF] hover:bg-[#215373]">
            More blogs
          </button>
        </div>

      </div>
    </section>
  </main>
</template>

<style scoped>
.left{
  animation: slide-up-left 500ms;
}

@keyframes slide-up-left {
  from {
    transform: translate3d(60px, 80px, 0);
  }
  to {
    transform: translate3d(0,0,0);
  } 
}

.right {
  animation: slide-down-right 500ms;
}

@keyframes slide-down-right {
  from {
    transform: translate3d(-40px, 50px, 0);
  }
  to {
    transform: translate3d(0,0,0);
  } 
}

/* .fade-in {
  animation: fade-in 50ms;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  1% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
} */
</style>