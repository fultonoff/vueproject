<template>
  <div
    class="max-w-[260px] w-full h-[833px] text-[#717D96] bg-[#EDF0F7] border-[#1A202C] border-r-2 py-6"
  >
    <div class="flex items-center py-3 pl-10 gap-2.5 cursor-pointer">
      <img src="/images/icon-placeholder.png" alt="" />
      <p class="text-sm leading-6 font-medium">Products</p>
    </div>
    <div
      @click="isSettingsOpen = !isSettingsOpen"
      class="flex items-center py-3 hover:bg-[#E2E7F0] pl-10 gap-[10px] hover:text-[#2D3648] cursor-pointer"
    >
      <img src="/images/icon-placeholder.png" alt="" />
      <p class="text-sm leading-6 font-medium">Settings</p>
      <i class="fa"></i>
    </div>
    <div v-if="isSettingsOpen" class="flip-in-hor-bottom">
    <ul>
    
      <NuxtLink to="/categories" exact-active-class="bg-[#D4D8DF]" 
        class="hover:bg-[#D4D8DF] flex py-2 leading-6 text-sm font-medium pl-[67px] cursor-pointer"
      >
      Categories
        
      </NuxtLink>
      <NuxtLink to="/product-type" exact-active-class="bg-[#D4D8DF]" 
        class="hover:bg-[#D4D8DF] flex py-2 leading-6 text-sm font-medium pl-[67px] cursor-pointer"
      >
      Product Type
        
      </NuxtLink>
      <NuxtLink to="/product-size" exact-active-class="bg-[#D4D8DF]" 
        class="hover:bg-[#D4D8DF] flex py-2 leading-6 text-sm font-medium pl-[67px] cursor-pointer"
      >
      Product Size
        
      </NuxtLink>
      <NuxtLink to="/attributes" exact-active-class="bg-[#D4D8DF]" 
        class="hover:bg-[#D4D8DF] flex py-2 leading-6 text-sm font-medium pl-[67px] cursor-pointer"
      >
      Attributes
        
      </NuxtLink>
    
    </ul>
      
      
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSettingsOpen = ref(false);


const inputs = ref([
  { value: 'Print Only' },
  { value: 'Print and Mail' },
  { value: 'Electronic' },
]);

const addInput = () => {
  inputs.value.push({ value: '' });
};

const removeInput = (index) => {
  inputs.value.splice(index, 1);
};

</script>
