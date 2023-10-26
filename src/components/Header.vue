<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import Cart from './Cart.vue'
import Wishlist from './Wishlist.vue'
import Search from './Search.vue'
import CollectionMobile from './CollectionMobile.vue'

const isOpen = ref(false);
const collectionOpen = ref(false)
const cartOpen = ref(false)
const wishlistOpen = ref(false)
const body = document.querySelector("body")
const searchOpen = ref(false)
const mobileCollectionOpen = ref(false)
const animationValue = ref('')

const router = useRouter()

router.beforeEach(() => {
    isOpen.value = collectionOpen.value = false
    body.style.overflow = 'auto'
})

function collection(){
    collectionOpen.value = !collectionOpen.value
     return collectionOpen.value ? body.style.overflow = 'hidden' : body.style.overflow = 'auto'
}

function removeCollection() {
    body.style.overflow = 'auto'
    collectionOpen.value = false
}

function openMobileCollection() {
    mobileCollectionOpen.value = true
    isOpen.value = false
}

function closeMobile() {
    mobileCollectionOpen.value = false
    isOpen.value = true
}

function overlay() {
    if(mobileCollectionOpen.value === true || isOpen.value === true) return true 
    else return false
}

function removeOverlay(){
    mobileCollectionOpen.value = isOpen.value = false
}

function openFunction (value) {
    value == 'cart' ? cartOpen.value = true : wishlistOpen.value = true

    window.innerWidth < 1024 ? animationValue.value = 'easeIn' : animationValue.value = 'slideIn'
}


</script>

<template>
    <header class="w-full fixed z-[60] bg-white header-shadow">
        <div class="relative w-11/12 mx-auto flex items-center justify-between py-8">
            <div class="lg:w-1/3 flex lg:pl-14">
                <img src="/images/logo/logo.svg" alt="Fashion Fit Logo">
            </div>
            <nav class="w-2/5 hidden lg:block">
                <ul class="lg:flex space-x-14 font-normal text relative z-50">
                    <li>
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/about">About us</RouterLink>
                    </li>
                    <li>
                        <button @click="collection">Collections</button>
                    </li>
                    <li>
                        <RouterLink to="/contact-us">Contact us</RouterLink>
                    </li>
                </ul>
            </nav>
            <div class="hidden lg:flex">
                <div @click="searchOpen = true" class="relative w-full px-3 group cursor-pointer">
                    <img class="w-full h-full object-fit" src="/images/icons/search.svg" alt="Search Icon">
                    <div class="bg-[#215373] group-hover:block hidden absolute px-7 py-1 -left-4 -bottom-10 ">
                        <div class="arrow"></div>
                        <span class="block text-xs text-[#FFFFFF] text-center font-medium">Search</span>
                    </div>
                </div> 
                <div class="relative w-full px-3 group cursor-pointer">
                    <RouterLink to="signin" class="flex items-center space-x-2 py-1">
                        <img class="w-full h-full object-fit" src="/images/icons/person.svg" alt="Person Icon">
                        <div class="bg-[#215373] group-hover:block hidden absolute px-6 py-1 -left-4 -bottom-10">
                            <div class="arrow"></div>
                            <span class="block text-xs text-[#FFFFFF] text-center font-medium">Account</span>
                        </div>
                    </RouterLink>
                </div>
                <div @click="openFunction('cart')" class="relative w-full px-3 group cursor-pointer">
                    <img class="w-full h-full object-fit" src="/images/icons/cart.svg" alt="Cart Icon">
                    <div class="bg-[#215373] group-hover:block hidden absolute px-7 mx-2 py-1 -left-4 -bottom-10 z-40">
                        <div class="arrow"></div>
                        <span class="block text-xs text-[#FFFFFF] text-center font-medium">Cart</span>
                    </div>
                </div>
                <div @click="openFunction('wishlist')" class="relative w-full px-3 group cursor-pointer">
                    <img class="w-full h-full object-fit" src="/images/icons/wishlist.svg" alt="Wishlist Icon">
                    <div class="bg-[#215373] group-hover:block hidden absolute px-6 py-1 -left-4 -bottom-10">
                        <span class="block text-xs text-[#FFFFFF] text-center font-medium">Wishlist</span>
                        <!-- ToolTip -->
                        <div class="arrow"></div>
                    </div>
                </div>
            </div>
            
            <div @click="isOpen = !isOpen" class="lg:hidden">
                <img src="/images/icons/menu.svg" alt="Menu Bar">
            </div>
            
            <!-- Responsive mobile -->
            <Transition name="menu">
                <div class="fixed lg:hidden w-[70%]  border-4 bg-[#FFFFFF] top-16 right-0 z-40" v-if="isOpen">
                    <div class="flex justify-between pt-4 pl-4 pr-2">
                        <div class="border flex space-x-3 w-4/5 px-4 res-search-input">
                            <img class="w-4" src="/images/icons/search-black.svg" alt="Search Icon">
                            <div class="w-full h-full cursor-pointer">
                                <input type="text" class="h-full w-full focus:outline-none placeholder:text-xs placeholder:font-medium placeholder:text-[#141415]" placeholder="Search" name="search">
                            </div>
                        </div>
                        <div @click="isOpen = close" class="flex items-center pl-4 pr-2 py-4">
                            <img class="w-3 h-full object-fit" src="/images/icons/close.svg" alt="Close SVG">
                        </div>
                    </div>
                    <nav>
                        <ul class="pt-4 pb-6git a text-[#141415]">
                            <li>
                                <RouterLink class="border-b border-[#CAD7DF] px-4 py-3 w-full block" to="/">Home</RouterLink>
                            </li>
                            <li>
                                <RouterLink class="border-b border-[#CAD7DF] px-4 py-3 w-full block" to="/about">About us</RouterLink>
                            </li>
                            <li @click="openMobileCollection" class="flex justify-between items-center pr-4 border-b border-[#CAD7DF]">
                                <button type="button" class="text-left px-4 py-3 w-full block">Collections</button>
                                <img src="/images/icons/right.svg" alt="Right">
                            </li>
                            <li>
                                <RouterLink class="border-b border-[#CAD7DF] px-4 py-3 w-full block" to="/contact-us">Contact us</RouterLink>
                            </li>
                        </ul>
                    </nav>

                    <div class="px-4 text-[#141415] pb-8">
                        <RouterLink to="signin" class="flex items-center space-x-2 py-1">
                            <img class="w-7 h-7" src="/images/icons/person.svg" alt="Person">
                            <span>My Account</span>
                        </RouterLink>
                        <div class="flex items-center space-x-2 py-1" @click="openFunction('wishlist')">
                            <img class="w-7 h-7" src="/images/icons/wishlist.svg" alt="Wishlist">
                            <span>My Wishlist</span>
                        </div>
                        <div class="flex items-center space-x-2 py-1" @click="openFunction('cart')">
                            <img class="w-7 h-7" src="/images/icons/cart.svg" alt="Cart">
                            <span>My Cart</span>
                        </div>
                    </div>
                </div>
            </Transition>

            <Transition name="overlay">
                <div class="bg-black opacity-[15%] fixed inset-x-0 inset-y-0 z-[30]" @click="removeOverlay()" v-if="overlay()"></div>
            </Transition>

            <!-- Collection Menu -->
            <div class="bg-black opacity-[15%] fixed inset-x-0 inset-y-0 z-[60]" @click="removeCollection()" :class="{'hidden' : !collectionOpen, 'block': collectionOpen}"></div>
            <div class="absolute w-full bg-[#FFFFFF] -bottom-80 z-[65]" :class="{'hidden' : !collectionOpen, 'block': collectionOpen}">
                <div class="flex justify-between mx-auto py-10 px-28">
                    <div>
                        <h1 class="text-[#141415] text-xl font-semibold">Shop</h1>
                        <ul class="py-5 space-y-2">
                            <li>
                                <a href="#">
                                    All Products
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Men
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Women
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    New Collection
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Top Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Sales
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 class="text-[#141415] text-xl font-semibold">Categories</h1>
                        <ul class="py-5 space-y-2">
                            <li>
                                <a href="#">
                                    Playsuits
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Men's suit
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Dresses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Skirts
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shorts
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Beach Wear
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h1 class="text-[#141415] text-xl font-semibold">Accessories</h1>
                        <ul class="py-5 space-y-2">
                            <li>
                                <a href="#">
                                    Bags
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Jewelries
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Shoes
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Watches
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Sunglasses
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Belts
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <Transition :name="animationValue">
        <Cart v-show="cartOpen" @closeCart="cartOpen = false" @closeMenu="isOpen = false" />
    </Transition>

    <Transition :name="animationValue">
        <Wishlist v-show="wishlistOpen" @closeWishlist="wishlistOpen = false" @closeMenu="isOpen = false" />
    </Transition>

    <Transition name="search">
        <Search v-show="searchOpen" @closeSearch="searchOpen = false" />
    </Transition>

    <Transition name="collection">
        <CollectionMobile v-show="mobileCollectionOpen" @closeMobileCollection="closeMobile" @closeMenu="mobileCollectionOpen = false" />
    </Transition>
</template>

<style scoped>
.header-shadow{
    box-shadow: 0px 2px 12px 0px #1414150F;
}
.arrow {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 100%;
    transform: translate(-50%);
    border: 10px solid;
    border-color: #0000 #0000 #215373 #0000;
}

 .menu-enter-active {
    animation: slideIn 1s;
  }

  @keyframes slideIn {
    0% {
      translate: 200px 0;
    }
    50% {
      translate: -15px 0;
    }
    100% {
        translate: 0 0;
    }
  }
  .menu-leave-active {
    animation: slideOut 0.5s;
  }
  @keyframes slideOut {
    from {
      translate: 0 0;
      /* Opacity makes the transition fade in.  */
      /* opacity: 1; */
    }
    to {
      translate: 300px 0;
    }
   }   
/* Collection */
   .collection-enter-active {
    animation: collectionSlideIn 1s;
   }

   @keyframes collectionSlideIn {
    0% {
      translate: 400px 0;
    }
    50% {
      translate: -10px 0;
    }
    100% {
        translate: 0 0;
    }
  }

  .collection-leave-active {
    animation: slideOut 0.5s;
  }
  @keyframes slideOut {
    from {
      translate: 0 0;
      /* Opacity makes the transition fade in.  */
      /* opacity: 1; */
    }
    to {
      translate: 500px 0;
    }
   }  

  /* For the cart and wishlist when responsive */
.easeIn-enter-active, .easeIn-leave-active {
  transition: opacity 0.5s ease-in-out;
}

  .easeIn-enter-from,
.easeIn-leave-to {
  opacity: 0;
}

/* For the cart and wishlist when on large screen */
.slideIn-enter-active {
    animation: slideInn 0.5s;
  }

  @keyframes slideInn {
    0% {
      translate: 500px 0;
    }
    100% {
        translate: 0 0;
    }
  }
  .slideIn-leave-active {
    animation: slideOutt 0.5s;
  }
  @keyframes slideOutt {
    from {
      translate: 0 0;
      /* Opacity makes the transition fade in.  */
      /* opacity: 1; */
    }
    to {
      translate: 500px 0;
    }
   }  

   /* For the search component */
   .search-enter-active {
    animation: slideDown 0.5s;
   }
   
   @keyframes slideDown {
    from{
        translate: 0 -500px;
    }
    to {
        translate: 0 0;
    }
   }

   .search-leave-active {
    animation: slideUp 0.5s;
   }
   
   @keyframes slideUp {
    from{
        translate: 0 0;
    }
    to {
        translate: 0 -500px;
    }
   }
</style>
