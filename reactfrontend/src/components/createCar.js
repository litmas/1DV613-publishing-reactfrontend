import carsStore from "../stores/carsStore"

export default function CreateCar() {

    const store = carsStore()

    if (store.updateCar._id) {
        return <></>
    }

    return (
            <div>
            <h2>Create car:</h2>
        <form onSubmit={store.createdCar}>
          <input onChange={store.updateCreateCarField} value={store.createCar.title} name='title' />
          <textarea  onChange={store.updateCreateCarField} value={store.createCar.body} name='body' />
          <button type='submit'>Create car</button>
        </form>
      </div>)}