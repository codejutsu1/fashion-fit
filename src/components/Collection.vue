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
 
const wishlist_red = ref([])
const img = ref([])
const imageloop = ref()
const images = ref([
  [
    '/images/best-sellers/best-seller-11.jpg',
    '/images/best-sellers/best-seller-1.jpg',
  ],
  [
    '/images/best-sellers/best-seller-21.jpg',
    '/images/best-sellers/best-seller-2.jpg',
  ],
  [
    '/images/best-sellers/best-seller-31.jpg',
    '/images/best-sellers/best-seller-3.jpg',
  ],
  [
  '/images/best-sellers/best-seller-41.jpg',
  '/images/best-sellers/best-seller-42.jpg',
    '/images/best-sellers/best-seller-4.jpg',
  ],
  [
    
    '/images/best-sellers/best-seller-51.jpg',
    '/images/best-sellers/best-seller-5.jpg',
  ],
  [
    
    '/images/best-sellers/best-seller-61.jpg',
    '/images/best-sellers/best-seller-6.jpg',
  ],
  [
    
    '/images/best-sellers/best-seller-71.jpg',
    '/images/best-sellers/best-seller-7.jpg',
  ],
  [
    
    '/images/best-sellers/best-seller-81.jpg',
    '/images/best-sellers/best-seller-8.jpg',
  ],
  [
    
    '/images/best-sellers/best-seller-91.jpg',
    '/images/best-sellers/best-seller-9.jpg',
  ],
])

function hoverImages(pos) 
{
  images.value[pos].forEach((item, index) => {
   
   imageloop.value = setTimeout(() => {
    document.getElementById('img-hover'+ (pos+1)).src = item
   }, 1500 * (index))
  })
}

function leaveImage(pos)
{
  clearTimeout(imageloop.value)
  document.getElementById('img-hover'+ (pos+1)).src = images.value[pos][images.value[pos].length - 1]
}

function wishlist(num) {
  wishlist_red.value[num] = !wishlist_red.value[num]
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
              <div class="relative h-4/5" @mouseenter="hoverImages(0)" @mouseleave="leaveImage(0)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover1" :src="images[0][1]" alt="Corset Midi Dress">
                <div @click="wishlist(0)" class="grid absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center cursor-pointer">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[0], 'wishlist_fadeIn': wishlist_red[0]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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
              <div class="relative h-4/5" @mouseenter="hoverImages(1)" @mouseleave="leaveImage(1)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover2" :src="images[1][1]" alt="Textured Shorts">
                <div @click="wishlist(1)"  class="grid absolute cursor-pointer w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[1], 'wishlist_fadeIn': wishlist_red[1]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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
              <div class="relative h-4/5" @mouseenter="hoverImages(2)" @mouseleave="leaveImage(2)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover3" :src="images[2][1]" alt="White Sneakers">
                <div  @click="wishlist(2)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area"  src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[2], 'wishlist_fadeIn': wishlist_red[2]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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
              <div class="relative h-4/5" @mouseenter="hoverImages(3)" @mouseleave="leaveImage(3)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover4" :src="images[3][2]" alt="Drawstring Top">
                <div @click="wishlist(3)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[3], 'wishlist_fadeIn': wishlist_red[3]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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
              <div class="relative h-4/5" @mouseenter="hoverImages(4)" @mouseleave="leaveImage(4)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover5" :src="images[4][1]" alt="Rhinestone Choker">
                <div @click="wishlist(4)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[4], 'wishlist_fadeIn': wishlist_red[4]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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

            <div class="w-full overflow-hidden best-seller-grid splide__slide h-[580px]">
              <div class="relative h-4/5" @mouseenter="hoverImages(5)" @mouseleave="leaveImage(5)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover6" :src="images[5][1]" alt="Flare Skirt">
                <div @click="wishlist(5)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[5], 'wishlist_fadeIn': wishlist_red[5]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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
              <div class="relative h-4/5" @mouseenter="hoverImages(6)" @mouseleave="leaveImage(6)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover7" :src="images[6][1]" alt="Cut out Top">
                <div @click="wishlist(6)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[6], 'wishlist_fadeIn': wishlist_red[6]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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
              <div class="relative h-4/5" @mouseenter="hoverImages(7)" @mouseleave="leaveImage(7)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover8" :src="images[7][1]" alt="Kicks">
                <div @click="wishlist(7)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[7], 'wishlist_fadeIn': wishlist_red[7]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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

            <div class="w-full overflow-hidden best-seller-grid splide__slide h-[580px]">
              <div class="relative h-4/5" @mouseenter="hoverImages(8)" @mouseleave="leaveImage(8)">
                <img class="w-full h-full object-fit cursor-pointer" id="img-hover9" :src="images[8][1]" alt="Kicks">
                <div @click="wishlist(8)" class="grid cursor-pointer absolute w-11 h-11 rounded-full wish-icon bottom-5 right-7 items-center justify-center">
                  <img class="grid-area" src="/images/icons/wish.svg" alt="Wish Icon">
                  <img class="grid-area" :class="{'wishlist_fadeOut': !wishlist_red[8], 'wishlist_fadeIn': wishlist_red[8]}" src="/images/icons/wish-red.svg" alt="Wish Icon">
                </div>
              </div>
              <div class="w-full h-1/5 bg-[#FDFBF9] py-3 text-center text-[#141415]">
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

<style>
.wishlist_fadeIn {
  transition: opacity 500ms;
  opacity: 1;
}

.wishlist_fadeOut {
  transition: opacity 500ms;
  opacity: 0;
}

.grid-area {
  grid-area: 1/-1;
}

</style>