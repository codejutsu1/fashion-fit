<script setup>

const options = {
  type: 'slide',
  perMove: 1,
  gap: '10px',
  rewind: true,
  autoplay: true,
  interval: 2500,
  mediaQuery: 'min',
  breakpoints: {
    640: {
        destroy: true,
    },
  }
}

</script>
<template>
    <section class="bg-[#F9F3EE] py-12">
      <Splide :has-track="false" :options="options" aria-label="New Collection">
        <div class="w-11/12 mx-auto text-[#141415] splide__track">
          <h1 class="font-semibold text-2xl lg:text-4xl lg:leading-[50px]">New Collection!</h1>
          <p class="text-base lg:text-2xl pb-14">Our collections are elegant and of the best quality</p>

          <div class="sm:!grid grid-cols-3 sm:gap-8  w-full splide__list">
            <div class="w-full overflow-x-hidden splide__slide border border-[#CAD7DF]">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/collection/collection-1.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Jean Jacket</span>
                <span class="font-semibold">N22,000</span>
              </div>
            </div>    

            <div class="overflow-x-hidden splide__slide border border-[#CAD7DF]">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/collection/collection-2.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Wide-leg pants</span>
                <span class="font-semibold">N25,000</span>
              </div>
            </div> 

            <div class="w-full overflow-hidden splide__slide border border-[#CAD7DF]">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/collection/collection-3.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Brown Bags Set</span>
                <span class="font-semibold">N60,000</span>
              </div>
            </div> 

            <div class="w-full overflow-hidden splide__slide border border-[#CAD7DF]">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/collection/collection-4.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Layered necklace</span>
                <span class="font-semibold">N12,000</span>
              </div>
            </div> 

            <div class="w-full overflow-hidden splide__slide border border-[#CAD7DF]">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/collection/collection-5.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Hoodie</span>
                <span class="font-semibold">N15,000</span>
              </div>
            </div> 

            <div class="w-full overflow-hidden splide__slide border border-[#CAD7DF]">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/collection/collection-6.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Blue Crop Top</span>
                <span class="font-semibold">N8,000</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center py-8">
            <button class="bg-[#307098] py-3 px-14 mx-auto font-semibold leading-5 text-[#FFFFFF] hover:bg-[#215373]">
              Shop all
            </button>
          </div>

        </div>
      </Splide>
    </section>
</template>