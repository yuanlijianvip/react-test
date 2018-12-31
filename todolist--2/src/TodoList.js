import React, { Component } from 'react';
import Dialog from './dialog';
import ListItem from './listItem';
import './main.css';

class TodoList extends Component {
	constructor (props) {
		super(props);

		this.state = {
			list: [],
			finished: 0
		};
	}

	addTask (newitem) {
		var allTask = this.state.list;
		allTask.push(newitem);
		this.setState({
			list: allTask
		});
	}

	updateFinished (todoItem) {
		var sum = 0;
		this.state.list.forEach( (item) => {
			if (item.id === todoItem.id) {
				item.status = todoItem.status;
			}
			if (item.status === 1) {
				sum++;
			}
		});
		this.setState({
			finished: sum
		});
	}

	updateTotal (todoItem) {
		var obj = [], sum = 0;
		this.state.list.forEach((item) => {
			if (item.id !== todoItem.id) {
				obj.push(item);
				if (item.status === 1 ) {
					sum++;
				}
			}
		});
		this.setState({
			list: obj,
			finished: sum
		});
	}

	all(){
		
	}

	render () {
		return (
			<div className="container">
				<h1>TodoList</h1>
				
			<Dialog addNewTask={this.addTask.bind(this)} nums={this.state.list.length}/>

				<ul>
					{ this.state.list.map ((item, index) =>
					
						<ListItem 
							item={item}  
							finishedChange={this.updateFinished.bind(this)} 
							totalChange={this.updateTotal.bind(this)}
							key={index}
						/>
					)}
					<li>{this.state.finished}已完成&nbsp;/&nbsp;{this.state.list.length}总数</li>
				</ul>

				{/* <button  onClick={this.all.bind(this)}>全部</button>
				<button  onclick={this.unfinish.bind(this)}>未完成</button>
				<button  onclick={this.finish.bind(this)}>已完成</button> */}
			</div>
		);
	}
}

export default TodoList;