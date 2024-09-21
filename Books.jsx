import { useEffect, useState } from "react"

export default function Books(){
    const [school , libRey] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => libRey(data))
    },[])
    return (
        <div>
            <h3>Book Count : {school.length}</h3>
        </div>
    )
}