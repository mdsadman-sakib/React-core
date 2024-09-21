import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);
    const evenHandle = () => {
        const newCount = count +1;
        setCount(newCount);
    }
    const evenGlde2 = () => {
        const newCount = count - 1;
        setCount(newCount);
    }
    
    return (
        <div>
            <h3>Count : {count}</h3>
            <button onClick={evenHandle}>ADD ME</button>
            <button onClick={evenGlde2}>Dislike</button>
        </div>
    )
}