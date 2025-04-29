import { useState, useEffect} from 'react';
import ShowTime from './ShowTime';

const initColor = "red";

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

function Menu() {
    const [items, setItems] = useState(initialItems);
    const [selectedItem, setSelectedItem] = useState(items[0]);
    const [color, setColor] = useState(initColor);

    return (  
        <>
            <h2>What's your travel snack?</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                    {item.title}
                    {' '}
                    <button onClick={() => {
                    setSelectedItem(item);
                    }}>Choose</button>
                </li> 
            ))}
            </ul>
        <p  style={{color:"blue"}} >You picked {selectedItem.title}.</p>
        <h3 style={{ color: color }}><ShowTime /> </h3>
        </>
    );
}

export default Menu;
