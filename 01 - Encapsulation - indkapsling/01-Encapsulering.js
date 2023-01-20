class Car {
    #speed
    constructor() {
      this.#speed = 0; // privat egenskab
    }
  
    accelerate(amount) {
      this.#speed += amount;
    }
  
    brake(amount) {
      this.#speed -= amount;
    }
  
    getSpeed() {
      return this.#speed;
    }
  }
  
  const myCar = new Car();
  console.log(myCar.getSpeed()); 
  myCar.accelerate(10);
  console.log(myCar.getSpeed()); 
  myCar.brake(5);
  console.log(myCar.getSpeed());
  //console.log(myCar.#speed = 200); 
  console.log(myCar.getSpeed());