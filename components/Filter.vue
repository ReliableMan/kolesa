<template>
  <div class="flex flex-col items-center w-64 h-screen bg-gray-200">
    <p class="mt-2 text-teal-500 uppercase mb-7">Параметры</p>
    
  <!-- * по бренду -->
     <div class="relative inline-block mb-4 w-[10rem]">
        <select @change="filteredBrand(selectedBrand)" v-model="selectedBrand" class="block w-full pl-2 pr-8 leading-tight bg-white rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value="">Производитель</option>
            <option value="Nokian Tyres">Nokian Tyres</option>
            <option value="Triangle">Triangle</option>
            
              <option v-for="brand in brands" 
              :key="brand.title" :value="brand.title">{{ brand.title }}</option>

        </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
    
    <!-- * по сезону -->
     <div class="relative inline-block mb-4 w-[10rem]">
        <select @change="filteredSeason(selectedSeason)" v-model="selectedSeason" class="block w-full pl-2 pr-8 leading-tight bg-white rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value="">Сезон</option>
            <option value="Зимние">Зима</option>
            <option value="Летние">Лето</option>
        </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

    <!-- * по ширине -->
     <div class="relative inline-block mb-4 w-[10rem]">
        <select @change="filteredWidth(selectedWidth)" v-model="selectedWidth" class="block w-full pl-2 pr-8 leading-tight bg-white rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value="">Ширина</option>
            <option v-for="wid in width" 
            :key="wid.value" :value="wid.value">{{ wid.title }}</option>
        </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

    <!-- * по высоте -->
    <div class="relative inline-block mb-4 w-[10rem]">
        <select @change="filteredHeight(selectedHeight)" v-model="selectedHeight" class="block w-full pl-2 pr-8 leading-tight bg-white rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value="">Высота</option>
            <option value="10">10</option>
            <option value="10.5">10.5</option>
            <option value="11">11</option>
            <option value="11.5">11.5</option>
            <option value="55">55</option>
            <option value="65">65</option>

        </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>

     <!-- * по диаметру -->
     <div class="relative inline-block mb-4 w-[10rem]">
        <select @change="filteredDiameter(selectedDiameter)" v-model="selectedDiameter" class="block w-full pl-2 pr-8 leading-tight bg-white rounded shadow appearance-none focus:outline-none focus:shadow-outline">
            <option value="">Диаметр</option>
            <option v-for="diametr in diameter" 
            :key="diametr.value" :value="diametr.value">{{ diametr.title }}</option>
        </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none">
        <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';

import { useFilteredStore } from '../stores/index.js';
const filteredStore = useFilteredStore();
const { brands } = storeToRefs(filteredStore);
const { width } = storeToRefs(filteredStore);
const { diameter } = storeToRefs(filteredStore);

const { filteredBrand, filteredSeason, filteredWidth, filteredHeight, filteredDiameter } = useFilteredStore();


const selectedBrand = ref('');
const selectedSeason = ref('');
const selectedWidth = ref('');
const selectedHeight = ref('');
const selectedDiameter = ref('');


</script>
