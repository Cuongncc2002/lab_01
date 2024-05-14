import React, { Component } from "react";

import '../styles/App.css';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>Nguyễn Chí Cường CE171631</h2>
            </div>
        );
    }
} export default HelloWorld;
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person = new Person("John", 25);
  person.sayHello();
  
