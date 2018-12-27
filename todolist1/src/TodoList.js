import React,{ Component,Fragment } from 'react';

class TodoList extends Component{

	constructor(props){
		super(props);
		this.state={
				inputValue:'',
				list:[]
		}
}

	render(){
		return(
			<Fragment>
				<div>
					<input 
						value={this.state.inputValue}
						onChange={this.handleInputChange}
					/>
					<button>提交</button>
				</div>
				<ul>
					<li>学英语</li>
					<li>Learning React</li>
				</ul>
			</Fragment>
		)
		}

		handleInputChange(e){
			this.state.inputValue=e.target.value;
		}
	}

export default TodoList;