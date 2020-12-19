import React, { Component } from 'react'
// https://pamit.medium.com/todo-list-building-a-react-app-with-rails-api-7a3027907665
// import update from 'immutability-helper'


class TodosContainer extends Component {
  state = {
    todos: [],
  }

  componentDidMount() {
    this.getTodos()
  }

  // getTodos = () => {
  //   const url = '/api/v1/todos'

  //   fetch(url)
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result)
  //       this.setState({
  //         todos: result
  //       })
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }

  getTodos = async () => {
    const url = '/api/v1/todos'

    try {
      let response = await fetch(url)
      let result = await response.json()
      this.setState({
        todos: result,
      })
    } catch (error) {
      console.log(error)
    }
  }

  createTodo = async (e) => {
    if (e.key === 'Enter') {
      console.log(e.target.value)

      
    }
  }

  render() {
    return (
      <>
        <div className='inputContainer'>
          <input
            className='taskInput'
            type='text'
            placeholder='Add a task'
            maxLength='50'
            onKeyPress={this.createTodo}
          />
        </div>

        <div className='listWrapper'>
          <ul className='taskList'>
            {this.state.todos.map(todo => {
              return (
                <li className='task' todo={todo} key={todo.id}>
                  <input className='taskCheckbox' type='checkbox' />
                  <label className='taskLabel'>{todo.title}</label>
                  <span className='deleteTaskBtn'>x</span>
                </li>
              )
            })}
          </ul>
        </div>
      </>
    )
  }
}

export default TodosContainer
