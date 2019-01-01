import React, { Component } from 'react';
// import './style.css';

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
        <h1>TodoList</h1>
        <input ref="myText" className = 'oInput' ></input>
        <button onClick = {this.handleClick.bind(this)}>确定</button>
        <div>
          {
              this.con.map((item,index)=>{
                if(item.status == this.xuan){
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



          {/* onClick={this.deleteItem.bind(this,index)} */}
        </div>
      </div>)

    }
}

export default TodoList;