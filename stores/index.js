import { defineStore } from 'pinia';
import { ref } from 'vue';
import store from '../store.js';

export const useFilteredStore = defineStore('filteredStore', () => {
  const loader = ref(false); // возможно лоадер подгрузки в перспективе
  const brands = ref(store.filter.brands); // бренд
  const width = ref(store.filter.width); // ширина
  const diameter = ref(store.filter.diameter); // диаметр
  const tyres = ref(store.tyres); // колёса все дефолтно

// ** функция фильтра по бренду
  function filteredBrand (selectedBrand) {
    if(selectedBrand !== ''){
      const initialValue = ref(store.tyres);
      const filteredArr = Object.values(toRaw(initialValue.value))
      const arr = filteredArr.filter(el => el.BrandName === selectedBrand)
      tyres.value = arr
    } else if (selectedBrand === '') {
      const initialValue = ref(store.tyres);
      const initValue = Object.values(toRaw(initialValue.value))
      tyres.value = initValue;
    }
  }
// ** функция фильтра по сезону
  function filteredSeason (selectedSeason) {
    if(selectedSeason !== ''){
      const initialValue = ref(store.tyres);
      const filteredArr = Object.values(toRaw(initialValue.value))
      const arr = filteredArr.filter(el => el.Season === selectedSeason)
      tyres.value = arr
      console.log(arr)
    } else if (selectedBrand === '') {
      const initialValue = ref(store.tyres);
      const initValue = Object.values(toRaw(initialValue.value))
      tyres.value = initValue;
    }
  }
  // ** функция фильтра по ширине
  function filteredWidth (selectedWidth) {
    let number = Number(selectedWidth)
    if(number !== 0 ){
      const initialValue = ref(store.tyres);
      const filteredArr = Object.values(toRaw(initialValue.value))
      const arr = filteredArr.filter(el => el.Width === number)
      tyres.value = arr
    } else if (number === 0 ) {
      const initialValue = ref(store.tyres);
      const initValue = Object.values(toRaw(initialValue.value))
      tyres.value = initValue;
    }
  }
  //  функция фильтра по высоте
  function filteredHeight (selectedHeight) {
    let numberHeight = Number(selectedHeight)
    console.log('number', numberHeight)
    if(numberHeight !== 0 ){
      const initialValue = ref(store.tyres);
      const filteredArr = Object.values(toRaw(initialValue.value))
      const arr = filteredArr.filter(el => el.Height === numberHeight)
      tyres.value = arr
    } else if (numberHeight === 0 ) {
      const initialValue = ref(store.tyres);
      const initValue = Object.values(toRaw(initialValue.value))
      tyres.value = initValue;
    }
  }
  //  функция фильтра по диаметру
  function filteredDiameter (selectedDiameter) {
    let numberDiameter = Number(selectedDiameter)
    if(numberDiameter !== 0){
      const initialValue = ref(store.tyres);
      const filteredArr = Object.values(toRaw(initialValue.value))
      const arr = filteredArr.filter(el => el.Diameter === numberDiameter)
      tyres.value = arr
      console.log(arr)
    } else if (numberDiameter === 0) {
      const initialValue = ref(store.tyres);
      const initValue = Object.values(toRaw(initialValue.value))
      tyres.value = initValue;
    }
  }

  return {
    loader, 
    brands, 
    width, 
    diameter, 
    tyres, 
    filteredBrand, 
    filteredSeason,
    filteredWidth,
    filteredHeight,
    filteredDiameter
  }
})
