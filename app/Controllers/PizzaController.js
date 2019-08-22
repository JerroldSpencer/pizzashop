import PizzaService from "../Services/PizzaService.js";

let _pizzaService = new PizzaService()

function _draw() {
  let template = ''
  let pizzas = _pizzaService.Pizza
  pizzas.forEach((pizza, index) => {
    template += pizza.getTemplate(index)
  })
  document.querySelector('#pizza').innerHTML = template
}

export default class PizzaController {
  constructor() {
    console.log("hello from pizza controller")
    _draw()
  }
  addPizza(event) {
    event.preventDefault()
    let form = event.target
    let newPizza = {
      name: form.name.value
    }
    _pizzaService.addPizza(newPizza)
    _draw()
  }
  addTopping(event, pizzaIndex) {
    event.preventDefault()
    let form = event.target
    let newTopping = form.topping.value
    _pizzaService.addTopping(newTopping, pizzaIndex)
    _draw()
  }
  deletePizza(index) {
    _pizzaService.deletePizza(index)
    _draw()
  }
  deleteTopping(pizzaIndex, toppingIndex) {
    _pizzaService.deleteTopping(pizzaIndex, toppingIndex)
    _draw()
  }
}