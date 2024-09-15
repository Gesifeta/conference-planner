import { rooms } from "./service"
import ServiceCard from "./ServiceCard"

const Venue = () => {
  return (
    <section className='app__venue'>
      <h1 className="app__service-type">Venue Selection</h1>
      <div className="app__service-container">
        {rooms.map((room, index) => (
          <div key={`${room.name} -${room.id}`}>
            <ServiceCard service={room} />
          </div>
        ))}
      </div>
      
      <div className="app__service-cost">
        <span>Total cost:</span>
      </div>
</section>
  )
}

export default Venue