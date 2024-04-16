import { useEffect } from 'react'
import carsStore from '../stores/carsStore'


function App() {


 const {
   createCar,
   updateCar,
   updateCreateCarField,
   createdCar,
   deleteCar,
   handleUpdateFieldChange,
   toggleUpdate,
   carUpdate,
} = carsStore()

const store = carsStore()

 //use effect
 useEffect(() => {
   store.fetchCars()
 }, )


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
