<script setup>
const options = {
  type:"loop",
  perPage:3, 
  perMove:1, 
  gap : "30px", 
  autoplay : true, 
  interval: 2500,
  pauseOnFocus : false,
  breakpoints : {
    640 : {
        perPage: 1,
        width: '100%',        
      },
    }
}
</script>
<template>
    <section class="best-sellers py-14 splide splide1">
      <Splide :has-track="false" :options="options" aria-label="Best Sellers Slide">
        <div class="w-11/12 mx-auto relative splide__track">
          <div class="best-sellers-div inline-block p-5 text-xl lg:text-2xl font-medium">
            Our Best Sellers
          </div>
          <div class="w-full splide__list">
            <div class="overflow-x-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-1.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Corset Midi Dress</span>
                <span class="font-semibold">N34,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <span class="ml-2 text-xs">4.9 (67 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-2.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Textured Shorts</span>
                <span class="font-semibold">N25,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-2.svg" alt="star">
                  <span class="ml-2 text-xs">4.5 (41 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid  splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-3.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">White Sneakers</span>
                <span class="font-semibold">N34,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-3.svg" alt="star">
                  <span class="ml-2 text-xs">4.0 (24 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-4.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Drawstring Top</span>
                <span class="font-semibold">N24,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-2.svg" alt="star">
                  <span class="ml-2 text-xs">4.0 (24 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-5.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Rhinestone Choker</span>
                <span class="font-semibold">N4,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-2.svg" alt="star">
                  <span class="ml-2 text-xs">4.0 (32 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-6.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Flare Skirt</span>
                <span class="font-semibold">N9,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-2.svg" alt="star">
                  <span class="ml-2 text-xs">4.0 (32 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-7.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Cut out Top</span>
                <span class="font-semibold">N18,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <span class="ml-2 text-xs">4.9 (112 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-8.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Kicks</span>
                <span class="font-semibold">N31,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <span class="ml-2 text-xs">4.9 (51 reviews)</span>
                </div>
              </div>
            </div>

            <div class="w-full overflow-hidden best-seller-grid splide__slide">
              <div class="relative">
                <img class="w-full h-full object-fit" src="/images/best-sellers/best-seller-9.jpg" alt="Jean Jacket">
                <div class="absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 flex items-center justify-center">
                  <img src="/images/icons/wish.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full bg-[#FDFBF9] py-3 text-center text-[#141415]">
                <span class="block text-xl">Kicks</span>
                <span class="font-semibold">N31,000</span>
                <div class="flex justify-center py-2">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <img src="/images/icons/star-1.svg" alt="star">
                  <span class="ml-2 text-xs">4.9 (51 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Splide>
    </section>
</template>