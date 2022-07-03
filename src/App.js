import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      value: "",
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onAddTask = () => {
    const obj = {
      name: this.state.value,
      id: Date.now(),
    };
    if (this.state.value !== "") {
      this.setState({ todos: this.state.todos.concat(obj) });
      this.setState({ value: "" });
    }
  };

  render() {
    const mylist = this.state.todos.map((todo) => (
      <li className="todo_item">{todo.name}</li>
    ));

    return (
      <div className="App">
        <div className="todo"> 
        <h1>To Do List</h1>
        <br/>
          <input
            placeholder="typeyour task"
            value={this.state.value}
            onChange={this.onChange}
          />
          <button onClick={this.onAddTask}>Add Item</button>
          <ul className="todo_wrapper">{mylist}</ul>
        </div>
      </div>
    );
  }
}

export default App;
