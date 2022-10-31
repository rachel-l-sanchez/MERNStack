import React, {useState} from 'react';
    
const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor} = props;
    const [count, setCount] = useState(age); 

    const clickCount = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>My name is {firstName} {lastName}</h2>
            <p>Age: {count}</p>

            <p> Hair Color: {hairColor}</p>
            <button onClick={clickCount}>Birthday Button for {firstName} {lastName}</button>
        </div>
    );
}
export default PersonCard;

