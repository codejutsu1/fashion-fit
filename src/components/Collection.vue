<script setup>
import { ref } from 'vue'

const options = {
  type:"slide",
  perPage:3, 
  perMove:1, 
  gap : "30px", 
  rewind: true,
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
 
const img = ref([])
const imageloop = ref()
const images = ref([
  [
    '/images/best-sellers/best-seller-1.jpg',
    '/images/best-sellers/best-seller-2.jpg',
    '/images/best-sellers/best-seller-3.jpg',
    '/images/best-sellers/best-seller-4.jpg', 
  ],
  [
    '/images/best-sellers/best-seller-2.jpg',
    '/images/best-sellers/best-seller-5.jpg',
    '/images/best-sellers/best-seller-6.jpg',
    '/images/best-sellers/best-seller-7.jpg',
  ],
  [
    '/images/best-sellers/best-seller-3.jpg',
    'imesad44'
  ],
  [
    '/images/best-sellers/best-seller-4.jpg',
    'images56'
  ],
  [
    '/images/best-sellers/best-seller-5.jpg',
    'images56'
  ],
  [
    '/images/best-sellers/best-seller-6.jpg',
    'images56'
  ],
  [
    '/images/best-sellers/best-seller-7.jpg',
    'images56'
  ],
  [
    '/images/best-sellers/best-seller-2.jpg',
    'images56'
  ],
  [
    '/images/best-sellers/best-seller-8.jpg',
    'images56'
  ],
  [
    '/images/best-sellers/best-seller-9.jpg',
    'images56'
  ],
])

function hoverImages(pos) 
{
  // console.log(pos)
  images.value[pos].slice(1).forEach((item, index) => {
   
   imageloop.value = setTimeout(() => {
    document.getElementById('img-hover'+(pos+1)).src = item
   }, 1500 * (index))
  })
}

function leaveImage(pos)
{
  clearTimeout(imageloop.value)
  document.getElementById('img-hover'+(pos+1)).src = images.value[pos][0]
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
              <div class="relative" @mouseenter="hoverImages(0)" @mouseleave="leaveImage(0)">
                <img class="w-full h-full object-fit" id="img-hover1" :src="images[0][0]" alt="Corset Midi Dress">
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
              <div class="relative img-hover" @mouseenter="hoverImages(1)" @mouseleave="leaveImage(1)">
                <img class="w-full h-full object-fit" id="img-hover2" :src="images[1][0]" alt="Textured Shorts">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[2][0]" alt="White Sneakers">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[3][0]" alt="Drawstring Top">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[4][0]" alt="Rhinestone Choker">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[5][0]" alt="Flare Skirt">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[6][0]" alt="Cut out Top">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[7][0]" alt="Kicks">
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
              <div class="relative img-hover">
                <img class="w-full h-full object-fit" :src="images[8][0]" alt="Kicks">
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