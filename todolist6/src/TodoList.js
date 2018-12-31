import React, { Component } from 'react';


class TodoList extends Component {
    constructor(props){
      super(props);
      this.state = [];
      this.con = this.state;
      this.xuan = 0;
    }
    
    handleClick = ()=>{
      let values  = {
        vas : document.getElementsByClassName('oInput')[0].value,
        status : 0
      }
      this.con.push(values);
      this.setState(this.con);
    }
    changeSty = (index)=>{
        this.con[index].status = 1;
        this.setState({});
    }
    changeOne = ()=>{
        this.xuan = 1;
        this.setState({});
    }
    changeTwo = ()=>{
        this.xuan = 0;
        this.setState({});
    }
    
    render(){
      return (<div>
        <h1>Todos</h1>
        <input className = 'oInput' ></input>
        <button onClick = {this.handleClick.bind(this)}>确定</button>
        <div>
          {
              this.con.map((itrem,index)=>{
                if(itrem.status == this.xuan){
                  return (<div><li >{itrem.vas}</li><button onClick = {this.changeSty.bind(this,index)}>完成</button></div>)
                }
                
              })
          }
        </div>
        <div>
          <button onClick = {this.changeOne.bind(this)}>已完成</button>
          <button onClick = {this.changeTwo.bind(this)}>未完成</button>
        </div>
      </div>)

    }
}

export default TodoList;