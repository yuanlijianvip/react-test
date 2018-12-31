import React,{ Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css'
// import { Input,Button,List } from 'antd';

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state={
				inputValue:'',
				list:[]
		}
		this.handleInputChange=this.handleInputChange.bind(this);
		this.handleBtnClick=this.handleBtnClick.bind(this);
		this.handleItemDelete=this.handleItemDelete.bind(this);
}

	render(){
		return(
			<Fragment>
				<div>
					<label htmlFor="insertArea">输入内容</label>
					<input 
						id="insertArea"
						className='input'
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button onClick={this.handleBtnClick}>提交</button>
				</div>
				<ul>
					{this.getTodoItem()}
				</ul>
			</Fragment>
		)
		}

		getTodoItem(){
				return 	this.state.list.map((item,index)=>{
				return (
					<div>
						<TodoItem 
							content={item} 
							index={index}
							deleteItem={this.handleItemDelete}	
						/>
					</div>
					)
			})
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

		handleItemDelete(index){
			this.setState((prevState)=>{
				const list=[...prevState.list];
				list.splice(index,1);
				return {list}
			})
		}
	}

export default TodoList;