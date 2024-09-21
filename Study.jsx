import { useState } from "react"

export default function Study(){
    const [study , isStudy] = useState(10);
    const handler = () => {
        const newStudy = study + 1 ;
        isStudy(newStudy);
    }
    const handleS = () => {
        const removeS = study - 1 ;
        isStudy(removeS);
    }
    return (
        <div>
            <h3>Study : {study}</h3>
            <button onClick={handler}>add Book</button>
            <button onClick={handleS}>remove</button>
            </div>
    )
}