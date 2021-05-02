import React, {Component} from 'react';
import './TodoItem.css';
import classNames from 'classnames';
import 'boxicons'


class TodoItem extends Component{
    render(){
        // const item = this.props.item;
        // the same
        const {item, onClick} = this.props;

        // can use package classnames the same 
        // let className = 'TodoItem';
        // if(item.isComplete){
        //     className += ' todoItem-complete'
        // } 
        let nameBoxIcon = 'checkbox';
        let animationBoxIcon = 'tada'
        if(item.isComplete){
            nameBoxIcon = 'checkbox-checked';
            animationBoxIcon = 'none';
        }

        return (
            // not use classnames package
            // <div className={className}>
            //     <p>{item.title}</p>
            // </div>

            // use package classnames package
            <div className={classNames('todoItem', {
                'todoItem-complete': item.isComplete
            })}>
                <box-icon onClick={onClick} type='solid' size='36px' name={nameBoxIcon} color='#c4c4c4' animation={animationBoxIcon}></box-icon>
                <p>{item.title}</p>
            </div>
        );
    }
}

export default TodoItem;