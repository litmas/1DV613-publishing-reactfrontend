import { create } from 'zustand'
import axios from 'axios'

const carsStore = create((set) => ({

  cars: null,

  fetchCars: async () => {
    console.log('blup blup it works!!! ')
    //fetch notes
  const res = await axios.get('http://localhost:8080/cars') 
  //set it on state
  set({cars: res.data.cars})
  }
}))

export default carsStore
