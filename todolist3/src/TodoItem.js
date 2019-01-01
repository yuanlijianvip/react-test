import React,{ Component } from 'react';
// import PropTypes from 'prop-types';


class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    render(){
        const {content}=this.props;
        return (
        <div>
            
         <div>
             <input  type="checkbox" class="toggle"></input>
             <span id="content"  onClick={this.handleClick }>{content}</span>
             <button  onClick={this.handleFiClick.bind(this)} >完成</button>
         </div>
        
         </div>
         )
    }

    handleFiClick(){
        
    }


    handleClick(){
        const {deleteItem,index}=this.props;
        deleteItem(index);
    }
}


export default TodoItem;