import React, { Component } from 'react';
import './style.css';
// import 'antd/dist/antd.css';
// import {Button} from 'antd';
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        // obj:[],
        // obj1:[],
        list:[
            {
                name:'111',
                status:0
            },
            {
                // id:1,
                name:'222',
                status:0
            },
            {
                // id:2,
                name:'333',
                status:0
            }
        ]
    }
  } 

  saveHandle(){
    var arr = [...this.state.list];
    var val= this.refs.myText.value;

    arr.push({
        // id:this.state.list[this.state.list.length-1]+1,
        name:val,
        status:0
    });
    this.setState({

     list:arr
    })

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
      arr[index].status = (arr[index].status === 0 ? 1 : 0);
      this.setState({      
          list:arr
      })
    }

   

    changeTwo=()=>{
      var arr = [...this.state.list];
      // var obj=[...this.start.obj]
      // this.xuan=1;
      // var obj=[...this.state.obj];
      // this.btn=0;
      arr.map( (item,index) => {
          if(item.status==0){
            arr.push(item)
          }
      })

      this.setState({      
       list:arr
      })

      }

      // changeOne=()=>{
      // // var arr = [...this.state.list];
      // var obj1=[]
      // this.state.list.map( (item,index) => {
      //     if(item.status===1){
      //       obj1.push(item)
      //     }
      // })

      // this.setState({      
      //  obj1:obj1
      // })

      // }
      
   
    render(){
      return (<div className='container'>
        <h1>TodoList</h1>
        <input style={{width:'240px',marginRight:'10px'}} ref="myText" placeholder="请输入任务名..."></input>
        <button type="dashed" onClick = {this.saveHandle.bind(this)}>确定</button>
        <ul>
          { 
              this.state.list.map((item,index)=>{
              
                //  if(item.status == this.btn){

              return(  <li 
                          // className={ item.isFinished ? 'selected':''}
                        >
                          {/* <input 
                            type="checkbox"
                            defaultChecked={ item.isFinished }
                            onClick={this.changeHandle.bind(this,index)}  
                           /> */}
                           <span  onClick = {this.changeHandle.bind(this,index)} style={{textDecoration : item.status === 0 ? 'blink':'line-through'}} >{item.name}</span>
                           <button onClick = {this.deleteClick.bind(this,index)}>删除</button>   
                      </li>
               ) 
                // }
              })
              
             
            
          }
        </ul>

        
        <div>
          <button className="btn" type="primary" size={"small"} onClick = {this.changeTwo.bind(this)}>未完成</button>
          {/* <button className="btn" type="primary" size={"small"} onClick = {this.changeOne.bind(this)}>已完成</button> */}
          {/* <button className="btn" type="primary" size={"small"} onClick = {this.changeThree.bind(this)}>全部</button> */}
        </div>
      </div>)

    }
}

export default TodoList;