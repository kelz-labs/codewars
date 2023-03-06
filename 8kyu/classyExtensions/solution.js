/**
 * Task: create a class that return the cat name + "meows"
 */

class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Solution extends Animal {
  constructor(name) {
    super(name);
  }

  speak() {
    return `${this.name} meows.`;
  }
}

const solution = new Solution("Budi");
console.log(solution.speak());
