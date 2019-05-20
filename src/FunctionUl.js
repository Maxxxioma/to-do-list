import React from "react";

const FunctionUl = () => {
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
}