import React, { Component } from 'react';
import './style.css';
// import 'antd/dist/antd.css';
// import {Button} from 'antd';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        list:[
            {
                id:0,
                name:'111',
                isFinished:true
            },
            {
                id:1,
                name:'222',
                isFinished:true
            },
            {
                id:2,
                name:'333',
                isFinished:false
            }
        ]
    }
  } 

    


    handleBtnClick(){

      this.setState((prevState)=>({
        list:[...prevState.list,prevState.inputValue],
        inputValue:''
      }))
    }

    handleItemDelete(index){
			this.setState((prevState)=>{
				const list=[...prevState.list];
				list.splice(index,1);
        return {list}
			})
    }

     changeHandle(index){

      this.setState(()=>{
      var  isFinished=!isFinished;

      })
     }


   
    render(){
      return (<div className='container'>
        <h1>TodoList</h1>
        <input style={{width:'240px',marginRight:'10px'}} ref='myText'  onChange={this.handleInputChange.bind(this)} placeholder="请输入任务名..."></input>
        <button type="dashed" onClick = {this.handleBtnClick.bind(this)}>确定</button>
        <ul>
          {
              this.state.list.map((item,index)=>{
              return(  <li 
                        className={ 'isFinished' ? 'selected':''}
                        >
                          <input type="checkbox"  
                            defaultChecked={this.state.isFinished}
                             onClick={this.changeHandle.bind(this,index)}  
                           />
                           <span>{item}</span>
                           <button onClick = {this.handleItemDelete.bind(this,index)}>删除</button>   
                      </li>
               ) 
              })
          }
        </ul>
        <div>
          {/* <button className="btn" type="primary" size={"small"} onClick = {this.changeTwo.bind(this)}>未完成</button> */}
          {/* <button className="btn" type="primary" size={"small"} onClick = {this.changeOne.bind(this)}>已完成</button>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeThree.bind(this)}>全部</button> */}
        </div>
      </div>)

    }
}

export default TodoList;