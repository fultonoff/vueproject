<template>
  <!-- Content -->
  <div class="flex items-end gap-4 w-full">
    <div class=" max-w-[452px] border-l w-full p-4">
      
      <!-- Inputs -->
      <div class="w-full flex flex-col gap-8">
        <!-- Existing input -->
        <div
          class="flex items-center gap-3"
          v-for="(input, index) in inputs"
          :key="index"
        >
          <input
            type="text"
            v-model="input.value"
            :placeholder="'Input ' + (index + 1)"
            class="text-sm font-normal max-h-[46px] leading-[14px] w-full border rounded-[4px] py-4 pl-4 border-gray-300 hover:border-gray-400"
          />
          <!-- Cross Icon -->
          <svg
            v-if="index > 0"
            class="cursor-pointer"
            width="37"
            height="37"
            viewBox="0 0 37 37"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            @click="removeInput(index)"
          >
            <circle cx="18.5" cy="18.5" r="18.5" fill="#F0F0F0" />
            <path
              d="M24.25 22.25L13.75 11.75"
              stroke="#1E293B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.25 11.75L13.75 22.25"
              stroke="#1E293B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <!-- Add Button -->
        <div
          class="flex justify-center py-[2px] w-full bg-[#F0F0F0] rounded-[4px] cursor-pointer hover:bg-gray-200"
          @click="addInput"
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9705 24.3951V9.5459"
              stroke="#1E293B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M24.3951 16.9705H9.54584"
              stroke="#1E293B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Cross icons -->
  </div>
</template>

<script setup>
import { ref } from "vue";

const isSettingsOpen = ref(false);

const inputs = ref([
  { value: "Postcards" },
  { value: "Brochures" },
  { value: "Flyers" },
]);

const addInput = () => {
  inputs.value.push({ value: "" });
};

const removeInput = (index) => {
  inputs.value.splice(index, 1);
};
</script>

