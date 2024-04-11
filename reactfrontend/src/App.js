import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
//state
  const[cars, setCars] = useState(null)
  const [createCar, setCreateCar] = useState({
    title: '',
    body: ''
  })
  //use effect
  useEffect(() => {
    fetchCars()
  }, [])


  // fetch car
  const fetchCars = async () => {
  //fetch notes
  const res = await axios.get('http://localhost:8080/cars') 
  //set it on state
  setCars(res.data.cars)
  console.log(res)
  console.log(res)
  }

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

  return <><div>
    <h2>Cars: </h2>
    {cars && cars.map(car => {
      return (<div key={car._id}>
        <h3>{car.title}</h3>
        <button onClick={() => deleteCar(car._id)}>Delete</button>
      </div>)
    })}
  </div><div>
      <h2>Create car:</h2>
      <form onSubmit={createdCar}>
        <input onChange={updateCreateCarField} value={createCar.title} name='title' />
        <textarea  onChange={updateCreateCarField} value={createCar.body} name='body' />
        <button type='submit'>Create car</button>
      </form>
    </div></>
}

export default App;
