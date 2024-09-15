import { add_ons } from "./service"
import ServiceCard from "./ServiceCard"

const Addon = () => {
  return (
    <section className='app__addons'>
      <h1 className="app__service-type">Add-ons Selection</h1>
      <div className="app__service-container">
      {add_ons.map((add_ons, index) => (
        <div key={`${add_ons.name}-${index}`}>
          <ServiceCard service={add_ons} />
        </div>

      ))}
</div>
    <span className='app__addon-cost'>Total cost:</span>
</section>
  )
}

export default Addon