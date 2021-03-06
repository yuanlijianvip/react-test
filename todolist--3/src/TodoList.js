import React, { Component } from 'react';
 import './style.css';
// import 'antd/dist/antd.css';
// import { Button } from 'antd';
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
      this.refs.myText.value="";
      this.con.push(values);
      this.setState(this.con);
    }

    deleteClick=(index)=>{
      this.con.splice(index,1);
      this.setState(this.con);
    }

    changeSty = (index)=>{
        this.con[index].status = (this.con[index].status === 0 ? 1 : 0);
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

    changeThree = ()=>{
      this.xuan = 2;
      this.setState({});
  }
   
   

    
    render(){
      return (<div>
        <h1>TodoList</h1>
        <input ref="myText" className = 'oInput' ></input>
        <button onClick = {this.handleClick.bind(this)}>确定</button>
        <div>
          {
              this.con.map((item,index)=>{
                if(this.xuan==2){
                    if(item.status==0){
                    return(<div><span onClick = {this.changeSty.bind(this,index)}>{item.vas}</span><button onClick = {this.deleteClick.bind(this,index)}>删除</button></div>)
                  }else if(item.status==1){
                    return(<div><span onClick = {this.changeSty.bind(this,index)} style={{textDecoration : 'line-through'}}>{item.vas}</span><span><button onClick = {this.deleteClick.bind(this,index)}>删除</button></span></div>)
                  }
                }
               else if(item.status == this.xuan){
                  return (<div><span onClick = {this.changeSty.bind(this,index)} id="qqq" style={{textDecoration : item.status === 0 ? 'blink':'line-through'}} >
                        {item.vas}
                    </span><button onClick = {this.deleteClick.bind(this,index)}>删除</button></div>)
                }
                // <button onClick = {this.changeSty.bind(this,index)}>完成</button>
              })
          }
        </div>
        <div>
          
          <button onClick = {this.changeTwo.bind(this)}>未完成</button>
          <button onClick = {this.changeOne.bind(this)}>已完成</button>
          <button type="primary" onClick = {this.changeThree.bind(this)}>全部</button>



          {/* onClick={this.deleteItem.bind(this,index)} */}
        </div>
      </div>)

    }
}

export default TodoList;