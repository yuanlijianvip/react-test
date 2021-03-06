import React, { Component } from 'react';
import './Item.css';
export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editStatus: false,
      itemValue: this.props.item.content,
      newText: this.props.item.content
    }
  }
  troggleComplete(){
    this.props.toggleComplete(this.props.item.id)
  }
  deleteTodo(){
    this.props.deleteTodo(this.props.item.id)
  }
  editor = () => {
    this.setState({
      editStatus: true
    })
  }
  editNewValue = (e) => {
    const itemValue = e.target.value
    this.setState({
      itemValue
    })
  }
  onEnter = (e) => {
    if (e.keyCode === 13) {
      this.setState({
        editStatus: false,
        newText: this.state.itemValue
      })
    }
  }
  renderHtml = () => {
    if (!this.state.editStatus) {
      return (
        <div className={["todo-item",this.props.item.completed?"completed":""].join(' ')} onDoubleClick={this.editor}>
          <input type="checkbox" className="toggle" onChange={this.troggleComplete.bind(this)} id={this.props.item.id}/>
          <label htmlFor={this.props.item.id}>{this.state.newText}</label>
          <button className="destory" onClick={this.deleteTodo.bind(this)}></button>
        </div>
      )
    } else {
      return (
        <div className={["todo-item",this.props.item.completed?"completed":""].join(' ')} onDoubleClick={this.editor}>
          <input type="checkbox" className="toggle" onChange={this.troggleComplete.bind(this)} id={this.props.item.id}/>
          {/* <label htmlFor={this.props.item.id}>{this.props.item.content}</label> */}
          <input 
            value={this.state.itemValue} 
            onChange={this.editNewValue} 
            onKeyDown={this.onEnter}
            className="editInput"/>
          <button className="destory" onClick={this.deleteTodo.bind(this)}></button>
        </div>
      )
    }
  }
  render() {
    return (
      <div>
        { this.renderHtml() }
      </div>
    )
  }
}