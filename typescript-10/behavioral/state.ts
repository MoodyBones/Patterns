//  State | Behavioral Pattern
//
// The state pattern is used to encapsulate the state of an object so that it can be changed and accessed independently of the object.
// In JavaScript, finite state machines are sometimes used to maintain a predictable flow of data in an application via libraries like XState.

interface State {
  think(): string;
}

class HappyState implements State {
  think() {
    return 'I am happy 😇 ';
  }
}

class SadState implements State {
  think() {
    return 'I am sad 😢 ';
  }
}

class Human {
  state: State;

  constructor() {
    this.state = new HappyState();
  }

  changeState(state) {
    this.state = state;
  }

  think() {
    return this.state.think();
  }
}

const human = new Human();
console.log(human.think());
human.changeState(new SadState());
console.log(human.think());
