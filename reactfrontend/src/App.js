import { useState, useEffect } from 'react'
import axios from 'axios'
function App() {

  const[cars, setCars] = useState(null)

  useEffect(() => {
    fetchCars()
  }, [])

  const fetchCars = async () => {
  //fetch notes
  const res = await axios.get('http://localhost:8080/cars') 
  //set it on state
  setCars(res.data.cars)
  console.log(res)
  console.log(res)
  }
  return <div>
      <h2>Cars: </h2>
      {cars && cars.map(car => {
        return (<div key={car._id}> 
          <h3>{car.title}</h3>
        </div>)
      })}
    </div>
}

export default App;
