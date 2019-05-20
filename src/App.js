import './App.css';
import React, { useState } from 'react';

const App0 = () =>  {
  //let items = []; - альтернативная(хуки)
  let [items, setItems] = useState([]);
  let [newText, setNewText] = useState('');

  const add = () => { // функция для добавления элемента, элементы state не изменяемые
            if(newText === ''){
      alert("заполните поле ввода!");
      return;
    }
    setItems([...items, {text: newText, isComplete: false, isEditing: false}]);
    setNewText(''); // обнуляется поле ввода при  нажатии
  };

  const remove = (text) => {
    setItems(items.filter(item => item.text !== text ));
  };

  const complete = (text) =>{
      setItems(items.map(item => item.text === text ? {text: text, isComplete: !item.isComplete} : item ));
  };

    const edit = (text) => {
        setItems(items.map(item => item.text ===text ?
            {text: text, isComplete: item.isComplete, isEditing: !item.isEditing} : item ));
    };

    const applyEdit = (oldText, newText) => {
        if(newText === ''){
            alert("заполните поле ввода!");
            return;
        }
        setItems(items.map(item => item.text === oldText ?
            {text: newText, isComplete: item.isComplete, isEditing: item.isEditing} : item ));

    };
  console.log(items);
  return (
      <div className="main">
        <input type="text" value={newText} onChange={e => setNewText(e.target.value)} className="newTextInput"/>
        <button onClick={add} className="addBtn"> add</button>
        <ul>
          {items.map(item =>  <li>
              {!item.isEditing &&
                  <span onClick={e => complete(item.text)}        // почему использ  айтем
                  style={{textDecoration: item.isComplete ? 'line-through' : '',
                    color: item.isComplete ? '#44d60a' : 'red'}}>{item.text}</span>}
              {item.isEditing &&  <input type="text" value={item.text}
                                         onChange={e => applyEdit(item.text, e.target.value)}/>}
              <button onClick={e => edit(item.text)}>edit</button>
              {!item.isEditing && <button onClick={e => remove(item.text)} className="removeBtn">X</button>}
          </li>)}
        </ul>
      </div>


  );
};

// Классовый вариант
 class App extends React.Component {

     state = {
         items: [],
         newText: ''
     };

     add = () => { // функция для добавления элемента, элементы state не изменяемые
        if(this.state.newText === ''){
            alert("заполните поле ввода!");
            return;
        }
        this.setState({
            items: [...this.state.items,
                {text: this.state.newText, isComplete: false, isEditing: false}],
            newText: ''});

    };

     remove = (text) => {
         this.setState ({items: this.state.items
                 .filter(item => item.text !== text )});
    };

     complete = (text) => {
         this.setState ({items:this.state.items
                 .map(item => item.text === text ?
                     {text: text, isComplete: !item.isComplete} : item )});
    };

     edit = (text) => {
         this.setState ({items: this.state.items
                 .map(item => item.text ===text ?
            {text: text, isComplete: item.isComplete, isEditing: !item.isEditing} : item )});
    };

     applyEdit = (oldText, newText) => {
        if(newText === ''){
            alert("заполните поле ввода!");
            return;
        }
         this.setState ({items:this.state.items
                 .map(item => item.text === oldText ?
            {text: newText, isComplete: item.isComplete, isEditing: item.isEditing} : item )});

    };
    render() {
        return (
            <div className="main">
                <input type="text" value={this.state.newText}
                       onChange={e => this.setState({newText: e.target.value})}
                       className="newTextInput"/>
                <button onClick={this.add} className="addBtn"> add</button>

                <ul>
                    {this.state.items.map(item => <li>
                        {!item.isEditing &&
                        <span onClick={e => this.complete(item.text)}        // почему использ  айтем
                              style={{
                                  textDecoration: item.isComplete ? 'line-through' : '',
                                  color: item.isComplete ? '#44d60a' : 'red'
                              }}>{item.text}</span>}
                        {item.isEditing && <input type="text" value={item.text}
                                                  onChange={e => this.applyEdit(item.text, e.target.value)}/>}
                        <button onClick={e => this.edit(item.text)} className="editBtn">edit</button>
                        {!item.isEditing && <button onClick={e => this.remove(item.text)}
                                                    className="removeBtn">X</button>}
                    </li>)}
                </ul>
            </div>


        );
    }
}


export default App;
