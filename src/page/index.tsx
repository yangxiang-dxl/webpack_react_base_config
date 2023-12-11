import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css'; // 在这个文件中定义你的动画样式

const AnimatedList = () => {
  const [items, setItems] = useState<any>([]);

  const addItem = () => {
    const newItem = `Item ${items.length + 1}`;
    setItems([...items, newItem]);
  };

  const removeItem = (index: number) => {
    const updatedItems = items.filter((_:any, i:number) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      <TransitionGroup className="item-list">
        {items.map((item:number, index:number) => (
          <CSSTransition key={index} timeout={500} classNames="item">
            <div className="list-item">
              {item}
              <button onClick={() => removeItem(index)}>Delete</button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default AnimatedList;
