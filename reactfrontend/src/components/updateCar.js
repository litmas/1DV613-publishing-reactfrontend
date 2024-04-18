import carsStore from "../stores/carsStore"

export default function UpdateCar() {
    const store = carsStore()

    if(!store.updateCar._id) {
        return <></>
    }

    return (
        <div>
            <h2>Update car</h2>
            <form onSubmit={store.carUpdate}>
                <input onChange={store.handleUpdateFieldChange} value={store.updateCar.title} name='title'/>
                <textarea onChange={store.handleUpdateFieldChange} value={store.updateCar.body} name='body'/>
                <button type='submit'>Update car</button>
            </form>
        </div>
    )
}
