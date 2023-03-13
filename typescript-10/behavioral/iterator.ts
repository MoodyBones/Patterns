// Iterator | Behavioral pattern
// https://fireship.io/lessons/typescript-design-patterns/
//
// Allows you to traverse through a collection of objects/elements
// Pull based system

// Range function
// Most programming languages provide abstractions for iteration like the for loop.
// However, you can create your own iterators in JavaScript by using the Symbol.iterator property.
// The code below creates a custom range function that can be used in a regular for loop.

function range(start: number, end: number, step = 1) {
  return {
    [Symbol.iterator]() {
      return this
    },

    next() {
      if (start < end) {
        start = start + step
        return { value: start, done: false }
      }
      return { done: true, value: end }
    },
  }
}

for (const n of range(0, 100, 5)) {
  console.log(n)
}
