<template>
  <div v-for="item in tyres" :key="item.Brand.id"
  class="flex flex-wrap gap-2">
    <a :href="`https://vezemkolesa.ru/tyre/${item.Slug}`" class="flex flex-col items-center w-64 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img class="object-cover w-32 rounded-t-lg md:rounded-none md:rounded-l-lg" :src=item.Picture alt="img">
        <div class="flex flex-col justify-between p-2 leading-normal">
          <p class="mb-1 font-bold tracking-tight text-gray-900 dark:text-white">{{ item.Name }}</p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">{{ item.BrandName }}</p>
          <p class="mb-1 font-normal text-gray-700 dark:text-gray-400">{{ item.Width }}</p>
          <p  :title="`https://vezemkolesa.ru/tyre/${item.Slug}`"
              class="mb-1 font-normal text-teal-500 break-all dark:text-gray-400">ссылка</p>
        </div>
      </a>
    </div>

</template>

<script setup>
import { storeToRefs } from 'pinia';
import {useFilteredStore} from '../stores/index.js';

const filteredStore = useFilteredStore();
const { tyres } = storeToRefs(filteredStore);
// const { filteredBrand } = storeToRefs(filteredStore)


</script>
