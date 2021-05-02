import './App.css';
import TodoItem from './components/TodoItem';
import React, {Component} from 'react';

class App extends Component {
  constructor(){
    super();
    this.state = {
      newItem: '',
      todoItems:[
        {title: 'Learn ReactJS', isComplete: true},
        {title: 'Learn HTML/CSS', isComplete: true},
        {title: 'Build blog', isComplete: false},
      ]
    };
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.completeAll = this.completeAll.bind(this);

  }

  onItemClicked(item){
    return (event) => {
      const isComplete = item.isComplete;
      const {todoItems} = this.state;
      const index = todoItems.indexOf(item);

      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      });
    };
  }

  onKeyUp(e){
    if (e.keyCode === 13) {
      let text = e.target.value;
      if (!text) { return; }
      text = text.trim();
      if(!text) { return; }
      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete:false},
          ...this.state.todoItems
        ]
      });
    }
  }

  onChange(e){
    this.setState(
      {newItem: e.target.value}
    );
  }

  completeAll(e){
    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        item.isComplete = true;
        return item;
      })
    });
  }

  render(){
    const {todoItems} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <div className='box-input'>
            <box-icon 
              type='solid' 
              size='36px' 
              name='chevron-down' 
              color='#c4c4c4'
              onClick={this.completeAll} 
            />
            <input 
              type='text' 
              placeholder='what work on day?' 
              value={this.state.newItem}
              onChange={this.onChange}
              onKeyUp={this.onKeyUp}
            />
          </div>
          {
            todoItems.length > 0 && todoItems.map((item, index) => 
              <TodoItem 
                key={index} 
                item={item} 
                onClick={this.onItemClicked(item)} 
              />
            )
          }
          {
            todoItems.length === 0 && 'Nothing here!'
          }
          <div className='box-footer'>
            
          </div>
        </header>
      </div>
    );
  }
}

export default App;
