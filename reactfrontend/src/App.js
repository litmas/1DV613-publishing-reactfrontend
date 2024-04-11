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


  //functions
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

  const createdCar = async (e) => {
    e.preventDefault()

    //create car
const res = await axios.post('http://localhost:8080/cars', createCar)
    //update state

    setCars([...cars, res.data.car])
  }

  return <><div>
    <h2>Cars: </h2>
    {cars && cars.map(car => {
      return (<div key={car._id}>
        <h3>{car.title}</h3>
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
