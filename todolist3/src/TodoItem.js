import React,{ Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content!==this.props.content){
            return true;
        }else{
            return false;
        }
    }

    render(){
        const {content}=this.props;
        return (
        <div>
            
         <div>
             <input  type="checkbox" class="toggle"></input>
             <span id="content">{content}</span>
             <button   onClick={this.handleClick }>删除</button>
         </div>
        
         </div>
         )
    }

    handleClick(){
        const {deleteItem,index}=this.props;
        deleteItem(index);
    }
}


TodoItem.propTypes={
    test:PropTypes.string.isRequired,
    content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
    deleteItem:PropTypes.func,
    index:PropTypes.number

}
export default TodoItem;