import Cars from '../components/cars'
import UpdateCar from '../components/updateCar'
import CreateCar from '../components/createCar'
import carsStore from '../stores/carsStore'
import { useEffect } from 'react'

export default function CarsPage() { 

    const store = carsStore()

    useEffect(() => {
        store.fetchCars()
        // lint has a problem with this where it wants all dependencies to be correctly specified which mine is not. I will add a disable lint for this line
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return <>

  <Cars/>
  
  <UpdateCar/>
  
  <CreateCar/>
  
     </>
  }
