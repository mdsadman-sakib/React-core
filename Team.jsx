import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const handleAdd = () => {
        const newPlayer = team +1 ;
        setTeam(newPlayer);
    }
    const handleR = () => {
        const reMove = team - 1;
        setTeam(reMove);
    }
    return (
        <div>
            <h3>Player : {team}</h3>
            <button onClick={handleAdd}>ADD</button>
            <button onClick={handleR}>Remove</button>
        </div>
    )
}