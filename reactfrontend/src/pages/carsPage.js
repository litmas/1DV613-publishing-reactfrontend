import Cars from '../components/cars'
import UpdateCar from '../components/updateCar'
import CreateCar from '../components/createCar'
import carsStore from '../stores/carsStore'
import { useEffect } from 'react'

export default function CarsPage() { 

    const store = carsStore()

    useEffect(() => {
        store.fetchCars()
    }, [])

  return <>

  <Cars/>
  
  <UpdateCar/>
  
  <CreateCar/>
  
     </>
  }
