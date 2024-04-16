import { useState, useEffect } from 'react'
import axios from 'axios'
import carsStore from '../stores/carsStore'

function App() {

//stores
const store = carsStore()

//state
  const[cars, setCars] = useState(null)
  const [createCar, setCreateCar] = useState({
    title: '',
    body: ''
  })
  const [updateCar, setUpdateCar] = useState({
    _id: null,
    title: '',
    body: ''
  })
  //use effect
  useEffect(() => {
    store.fetchCars()
  }, [])

  const updateCreateCarField = (e) => {
    const {name, value} = e.target
    setCreateCar({
      ...createCar,
      [name]: value,
    })
  }

  //create car
  const createdCar = async (e) => {
    e.preventDefault()

    //create car
const res = await axios.post('http://localhost:8080/cars', createCar)
    //update state

    setCars([...cars, res.data.car])

    //clear state
    setCreateCar({title: '', body: ''})
  }

  //delete car
  const deleteCar = async (_id) => {
    //delete the car
    await axios.delete(`http://localhost:8080/cars/${_id}`)

    //update state
    const newCars = [...cars].filter(car => {
      return car._id !== _id
    })
    setCars(newCars)
  }

  const handleUpdateFieldChange = (e) => {
    const {value, name} = e.target

    setUpdateCar({
      ...updateCar,
      [name]: value
    })
  }

  const toggleUpdate = (car) => {
    //set state on update form

    setUpdateCar({title: car.title, body:car.body, _id: car._id})
  }

  const carUpdate = async (e) => {
    e.preventDefault()
    const {title, body} = updateCar
    //send the update request
    const res = await axios.put(`http://localhost:8080/cars/${updateCar._id}`, {title, body})
    
    //update state
    const newUpdatedCar = [...cars]
    const carIndex = cars.findIndex(car => {
      return car._id === updateCar._id
    })
    newUpdatedCar[carIndex] = res.data.car

    setCars (newUpdatedCar)

    //clear state
    setUpdateCar({
      _id: null,
      title: '',
      body: ''
    })
  }

  return <><div>
    <h2>Cars: </h2>
    {store.cars && store.cars.map(car => {
      return (<div key={car._id}>
        <h3>{car.title}</h3>
        <button onClick={() => deleteCar(car._id)}>Delete car</button>
        <button onClick={() => toggleUpdate(car)}>Update car</button>
      </div>) 
      })}
    </div>


  {updateCar._id && ( 
    <div>
  <h2>Update car</h2>
  <form onSubmit={carUpdate}>
    <input onChange={handleUpdateFieldChange} value={updateCar.title} name='title'/>
    <textarea onChange={handleUpdateFieldChange} value = {updateCar.body} name='body'/>
    <button type='submit'>Update car</button>
  </form>
  </div> 
  )}

 
 
 {!updateCar._id && ( <div>
          <h2>Create car:</h2>
      <form onSubmit={createdCar}>
        <input onChange={updateCreateCarField} value={createCar.title} name='title' />
        <textarea  onChange={updateCreateCarField} value={createCar.body} name='body' />
        <button type='submit'>Create car</button>
      </form>
    </div>)}
    </>
}

export default App;
