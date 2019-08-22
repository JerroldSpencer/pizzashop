import PizzaController from "./Controllers/PizzaController.js";

class App {
  constructor() {
    this.controllers = {
      pizzaController: new PizzaController()
    }
  }
}

window['app'] = new App()