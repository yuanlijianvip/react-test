import React,{ Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css'


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

	//在组件即将被挂载到页面的时刻自动执行
	// componentWillMount(){
	// 	console.log('componentWillMount');
	// }
	
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

			// componentDidMount(){
			// 	axios.get('./api/todolist')
			// 		.then(()=>{alert('succ')})
			// 		.catch(()=>{alert('error')})
			// }

			
			//组件被挂载到页面之后，自动被执行
		// componentDidMount(){
		// 	console.log('componentDidMount');
		// }

		//组件被更新之前，他会自动被执行
		// shouldComponentUpdate(){
		// 	console.log('shouldComponentUpdate');
		// 	return true;
		// }

		//组件被更新之前，它会自动执行，但是他在shouldComponentUpdate之后被执行，
		//如果shouldComponentUpdate返回true它才执行
		//如果返回false,这个函数就不会被执行了
		// componentWillUpdate(){
		// 	console.log('componentWillUpdate');
		// }

		//组件更新完成之后，他会被执行
		// componentDidUpdate(){
		// 	console.log('componentDidUpdate');
		// }

		getTodoItem(){
				return 	this.state.list.map((item,index)=>{
				return (
					<div>
						<TodoItem 
							content={item} 
							index={index}
							deleteItem={this.handleItemDelete}	
						/>
						{/*<li 
							key={index} 
							onClick={this.handleItemDelete.bind(this,index)}
							dangerouslySetInnerHTML={{__html:item}}
						>
						
						</li>*/}
					</div>
					)
			})
		}

		handleInputChange(e){
			const value=e.target.value;
			// const value=this.input.value
			this.setState(()=>({
				inputValue:value
			}))
			// this.setState({
			// 	inputValue:e.target.value
			// })

			//console.log(this);
			//this.state.inputValue=e.target.value;
		}
		handleBtnClick(){

			this.setState((prevState)=>({
				list:[...prevState.list,prevState.inputValue],
				inputValue:''
			}))

			// this.setState({
			// 	list:[...this.state.list,this.state.inputValue],
			// 	inputValue:''
			// })
		}

		handleItemDelete(index){
			//immutable
			//state 不允许我们做任何的改变

			this.setState((prevState)=>{
				const list=[...prevState.list];
				list.splice(index,1);
				return {list}
			})

			// const list=[...this.state.list];
			// list.splice(index,1);
			// this.setState({
			// 	list:list
			// })

		//	console.log(index);
		}
	}

export default TodoList;