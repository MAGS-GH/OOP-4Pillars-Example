class Car {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    startEngine() {
      console.log("Engine started.");
      // implementation details hidden
      // Send electrical power to the starter motor
      // Generate the compression necessary to start the combustion process.
      // Turn the engine over by engaging with the gear on the crankshaft.
      // Move the pistons up and down in the cylinders to compressthe air and fuel mixture in the cylinders.
      // When the engine reaches a certain speed, the spark plugs fire, igniting the fuel and air mixture in the cylinders, which causes the engine to start running on its own power.
    }
    
    drive() {
      console.log("Driving...");
      // implementation details hidden
    }
  }
  
  const myCar = new Car("Toyota", "Camry", 2020);
  myCar.startEngine(); 
  myCar.drive(); 
/* Her ser vi at det er lige meget om hvilken bil det er fordi vi har generaliseret vores funktion ved ikke at tilføje beskrivelsen,
fordi ikke alle billers motor fungere på samme måde. Her er virker funktionen lige meget hvilket */

// Et andet eksempel kunne være med dyr
class Animals {
  constructor(species, age, name) {
    this.species = species;
    this.age = age;
    this.name = name;
  }

  eat(food) {
    console.log(`${this.name} is eating ${food}`);
    // implementation details hidden
  }

  sleep() {
    console.log(`${this.name} is sleeping`);
    // implementation details hidden
  }
}

const dog = new Animals("Great Dane", 2, "Max");
dog.eat("bone"); // Max is eating bone
dog.sleep(); // Max is sleeping
/* Her kan brugeren oprette et nyt Animals-objekt og kalde metoderne eat() og sleep() for at simulere adfærden
af et dyr uden at skulle kende de specifikke implementeringsdetaljer om, hvordan dyret spiser eller sover,
for eksempel kan en hund spise anderledes end en løve, men eat()-metoden vil stadig gælde for begge. */