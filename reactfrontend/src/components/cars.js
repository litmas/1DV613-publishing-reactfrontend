import carsStore from "../stores/carsStore"
import Car from './singularCar'

export default function CarsStoreComponent() {
    const store = carsStore()
    return (
        <div>
            <h2>Cars: </h2>
            {store.cars && store.cars.map(car => {
                return (
                 <Car car={car} key={car._id}/>
                )
            })}
        </div>
    )
}
