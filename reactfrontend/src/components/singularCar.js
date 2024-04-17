import CarsStore from "../stores/carsStore"

export default function Car({car}) {

    const store = CarsStore(store => {
        return {
            deleteCar: store.deleteCar,
        toggleUpdate: store.toggleUpdate
    }
    })

    return (
        <div key={car._id}>
        <h3>{car.title}</h3>
        <button onClick={() => store.deleteCar(car._id)}>Delete car</button>
        <button onClick={() => store.toggleUpdate(car)}>Update car</button>
    </div>
    )
}