import React, { Component } from 'react'

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ' ' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input
          type="text"
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo"
          name="title"
          value={this.state.title}
          className="title"
          onChange={this.onChange}
        />
        <input
          type="submit"
          style={{ flex: '1' }}
          value="Submit"
          className="btn"
          onChange={this.onChange}
        />
      </form>
    )
  }
}

export default AddTodo

