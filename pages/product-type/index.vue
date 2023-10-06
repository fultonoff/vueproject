<template>
  <div class="w-full">
    <div>
      <p
        class="text-[32px] font-bold leading-[41.6px] border-b-2 py-8 pl-[67px] border-[#1A202C] text-[#2D3648]"
      >
        Product Type
      </p>
    </div>

    <div class="pl-[67px] pt-[37px] max-w-[452px] w-full">
      <p class="text-base font-medium text-gray-800 leading-4 mb-6">
        Product type per category
      </p>

      <div class='flex items-start border border-[#D1D5DB]'>
      <div class="flex flex-col">
       
        <button
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activateTab(index)"
          :class="[
            'py-2 px-4 text-gray-600',
            'hover:bg-[#D4D8DF] text-sm font-medium',
            activeTab === index
              ? 'bg-[#D4D8DF] '
              : 'bg-white ',
          ]"
          
        >
          {{ tab.label }}
        </button>
      </div>
      <!-- Display active tab content -->
      <div class="">
    
        <div v-if="activeTab === 0">
          <slot name="tab1">
          <PrintOnly/>
          </slot>
        </div>
        <div v-else-if="activeTab === 1">
          <slot name="tab2">
          <PrintMail/></slot>
        </div>
        <div v-else-if="activeTab === 2">
          <slot name="tab3">
          <Electronic/>
          </slot>
        </div>
      </div>
      
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0, // Index of the initially active tab
      tabs: [
        { label: 'Print Only', name: 'tab1' },
        { label: 'Print and Mail', name: 'tab2' },
        { label: 'Electronic', name: 'tab3' },
      ],
    };
  },
  methods: {
    activateTab(index) {
      this.activeTab = index;
    },
  },
};
</script>
