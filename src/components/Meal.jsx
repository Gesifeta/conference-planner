import { meals } from "./service"
import ServiceCard from "./ServiceCard"

const Meal = () => {

  const mealCost = meals.reduce((acc, meal) => acc + meal.price, 0) 
  return (
    <section className='app__meal'>
      <h1 className="app__service-type">Meal Selection</h1>
      <label htmlFor="numberOfIndividuals">
        Number of individuals: <input type="number" id="numberOfIndividuals" />
      </label>
      <div className="app__service-container">
        {meals.map((meal) => (
          <label htmlFor={meal.id} key={meal.id} className="checkbox">
            {meal.name} - ${meal.price}
            <input type="checkbox" name={meal.name} id={meal.id} />
          </label>
        ))}
      </div>
      <span className='app__service-cost'>Total cost: ${mealCost}</span>
    </section>
  )
}

export default Meal