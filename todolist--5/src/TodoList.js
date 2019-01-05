import React, { Component } from 'react';
import './style.css';
// import 'antd/dist/antd.css';
// import {Button} from 'antd';
class TodoList extends Component {
    constructor(props){
      super(props);
      this.state ={
        inputValue:'',
        list:[]
      }
    }
    
    handleInputChange(e){
			const value=e.target.value;
			this.setState(()=>({
				inputValue:value
			}))
    }
    
    handleBtnClick(){

			this.setState((prevState)=>({
				list:[...prevState.list,prevState.inputValue],
				inputValue:''
			}))
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
      return (<div className='container'>
        <h1>TodoList</h1>
        <input value={this.state.inputValue} onClick = {this.handleInputChange.bind(this)} style={{width:'240px',marginRight:'10px'}} ref="myText" className = 'oInput'></input>
        <button type="dashed" onClick={this.handleBtnClick.bind(this)}>确定</button>
        <ul>
          {
              this.state.list.map((item,index)=>{
             
                if(this.xuan==2){
                    if(item.status==0){
                    return(<li><span  onClick = {this.changeSty.bind(this,index)}>
                          {item.vas}
                        </span><button className="delete-btn" type="danger" size={"small"} onClick = {this.deleteClick.bind(this,index)}>删除</button></li>)
                  }else if(item.status==1){
                    return(<li><span onClick = {this.changeSty.bind(this,index)} style={{textDecoration : 'line-through'}}>{item.vas}</span><span><button className="delete-btn" type="danger" size={"small"} onClick = {this.deleteClick.bind(this,index)}>删除</button></span></li>)
                  }
                 }
                else if(item.status == this.xuan){
                  return (<li><span  onClick = {this.changeSty.bind(this,index)} style={{textDecoration : item.status === 0 ? 'blink':'line-through'}} >
                        {item.vas}
                    </span><button className="delete-btn" type="danger" size={"small"} onClick = {this.deleteClick.bind(this,index)}>删除</button></li>)
                }
              })
          }
        </ul>
        <div>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeTwo.bind(this)}>未完成</button>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeOne.bind(this)}>已完成</button>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeThree.bind(this)}>全部</button>
        </div>
      </div>)

    }
}

export default TodoList;