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
                isFinished:false
            },
            {
                id:1,
                name:'222',
                isFinished:false
            },
            {
                id:2,
                name:'333',
                isFinished:false
            }
        ]
    }
  } 

  saveHandle(){
    var arr = [...this.state.list];
    var val= this.refs.myText.value;

    arr.push({
        id:this.state.list[this.state.list.length-1].id+1,
        name:val,
        isFinished:false
    });
    this.setState(()=>({

     list:arr
    }))

    this.refs.myText.value = '';
}

    deleteClick(index){
      var arr = [...this.state.list];
      arr.splice(index,1);
      this.setState({
          list:arr
      })
    }

    changeHandle(index){
      var arr = [...this.state.list];
      arr[index].isFinished = !arr[index].isFinished;
      this.setState({      
          list:arr
      })
    }

   

    changeTwo=()=>{
      var arr = [...this.state.list];
      var obj=[]
      arr.forEach( (item) => {
          if(item.isFinished===false){
            obj.push(item)
          }
      })

      this.setState({      
       list:obj
      })

      }

      changeOne=()=>{
        var arr = [...this.state.list];
      var obj1=[]
      arr.forEach( (item) => {
          if(item.isFinished===true){
            obj1.push(item)
          }
      })

      this.setState({      
       list:obj1
      })

      }

   
    render(){
      return (<div className='container'>
        <h1>TodoList</h1>
        <input style={{width:'240px',marginRight:'10px'}} ref="myText" placeholder="请输入任务名..."></input>
        <button type="dashed" onClick = {this.saveHandle.bind(this)}>确定</button>
        <ul>
          {
              this.state.list.map((item,index)=>{
                // if(item.status == this.btn){
              return(  <li 
                          className={ item.isFinished ? 'selected':''}
                        >
                          <input 
                            type="checkbox"
                            defaultChecked={ item.isFinished }
                            onClick={this.changeHandle.bind(this,index)}  
                           />
                           <span >{item.name}</span>
                           <button onClick = {this.deleteClick.bind(this,index)}>删除</button>   
                      </li>
               ) 
                // }
              })
          }
        </ul>
        <div>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeTwo.bind(this)}>未完成</button>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeOne.bind(this)}>已完成</button>
          {/* <button className="btn" type="primary" size={"small"} onClick = {this.changeThree.bind(this)}>全部</button> */}
        </div>
      </div>)

    }
}

export default TodoList;