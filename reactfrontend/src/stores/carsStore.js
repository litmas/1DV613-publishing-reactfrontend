// carsStore.js

import { create } from 'zustand'
import axios from 'axios'


// Define your store
const CarsStore = create((set) => ({
cars: [],
createCar: {
   title: '',
   body: '',
},
updateCar: {
   _id: null,
   title: '',
   body: '',
},
fetchCars: async () => {
   const res = await axios.get('http://localhost:8080/cars')
   set({ cars: res.data.cars })
},
updateCreateCarField: (e) => {
   const { name, value } = e.target;
   set((state) => ({
     createCar: { ...state.createCar, [name]: value },
   }))
},
createdCar: async (e) => {
   e.preventDefault()
   const res = await axios.post('http://localhost:8080/cars', CarsStore.getState().createCar)
   set((state) => ({
     cars: [...state.cars, res.data.car],
     createCar: { title: '', body: '' },
   }))
},
deleteCar: async (_id) => {
   await axios.delete(`http://localhost:8080/cars/${_id}`)
   set((state) => ({
     cars: state.cars.filter((car) => car._id !== _id),
   }))
},
handleUpdateFieldChange: (e) => {
   const { value, name } = e.target
   set((state) => ({
     updateCar: { ...state.updateCar, [name]: value },
   }))
},
toggleUpdate: (car) => {
   set({
     updateCar: { title: car.title, body: car.body, _id: car._id },
   })
},
carUpdate: async (e) => {
   e.preventDefault()
   const { title, body } = CarsStore.getState().updateCar;
   const res = await axios.put(`http://localhost:8080/cars/${CarsStore.getState().updateCar._id}`, { title, body })
   set((state) => {
     const newUpdatedCar = [...state.cars]
     const carIndex = state.cars.findIndex((car) => car._id === CarsStore.getState().updateCar._id)
     newUpdatedCar[carIndex] = res.data.car
     return { cars: newUpdatedCar, updateCar: { _id: null, title: '', body: '' } }
   })
},
}))


export default CarsStore;
