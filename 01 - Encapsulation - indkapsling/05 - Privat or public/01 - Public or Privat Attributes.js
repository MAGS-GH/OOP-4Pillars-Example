class Person {

    #age; //Syntax for at gøre en attribute privat
  
    constructor(name, age) {
      this.name = name;
      this.#age = age;
    }
  
  
    introduceSelf() {
      console.log(`Hi! I'm ${this.name}, and i am ${this.#age} of age.`);
    }
  
    isAnAdultStudent() {
      console.log(this.#age >= 25)
    }
  
  }

    const summers = new Person('Simon', 24);

    summers.introduceSelf(); 
    summers.isAnAdultStudent(); 
    //console.log(summers.#age)