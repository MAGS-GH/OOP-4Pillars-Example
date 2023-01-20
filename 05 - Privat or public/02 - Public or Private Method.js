class Example {
    somePublicMethod() {
      this.#somePrivateMethod();
    }
  
    #somePrivateMethod() {
      console.log('You called me?');
    }
  }
  
  const myExample = new Example();
  
  myExample.somePublicMethod()
  
  myExample.#somePrivateMethod()