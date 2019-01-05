import React, { Component } from 'react';
import './style.css';
import 'antd/dist/antd.css';
import {Button} from 'antd';
class TodoList extends Component {
    constructor(props){
      super(props);
      this.state = [];
      this.con = this.state;
      this.xuan = 2;
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
      this.setState({
        
      });
  }
    render(){
      return (<div className='container'>
        <h1>TodoList</h1>
        <input style={{width:'240px',marginRight:'10px'}} ref="myText" className = 'oInput'></input>
        <Button type="dashed" onClick = {this.handleClick.bind(this)}>确定</Button>
        <ul>
          {
              this.con.map((item,index)=>{
             
                if(this.xuan==2){
                    if(item.status==0){
                    return(<li><span  onClick = {this.changeSty.bind(this,index)}>
                          {item.vas}
                        </span><Button className="delete-btn" type="danger" size={"small"} onClick = {this.deleteClick.bind(this,index)}>删除</Button></li>)
                  }else if(item.status==1){
                    return(<li><span onClick = {this.changeSty.bind(this,index)} style={{textDecoration : 'line-through'}}>{item.vas}</span><span><Button className="delete-btn" type="danger" size={"small"} onClick = {this.deleteClick.bind(this,index)}>删除</Button></span></li>)
                  }
                 }
                else if(item.status == this.xuan){
                  return (<li><span  onClick = {this.changeSty.bind(this,index)} style={{textDecoration : item.status === 0 ? 'blink':'line-through'}} >
                        {item.vas}
                    </span><Button className="delete-btn" type="danger" size={"small"} onClick = {this.deleteClick.bind(this,index)}>删除</Button></li>)
                }
              })
          }
        </ul>
        <div>
          <Button className="btn" type="primary" size={"small"} onClick = {this.changeTwo.bind(this)}>未完成</Button>
          <Button className="btn" type="primary" size={"small"} onClick = {this.changeOne.bind(this)}>已完成</Button>
          <Button className="btn" type="primary" size={"small"} onClick = {this.changeThree.bind(this)}>全部</Button>
        </div>
      </div>)

    }
}

export default TodoList;