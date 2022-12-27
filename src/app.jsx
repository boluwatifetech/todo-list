import React,{useState} from 'react'
import Data from './data'
import './main.css'

const Useobject=()=>{ 
    const [people,setPeople]=useState(Data)
    const removeItem=(id)=>{
        setPeople(people.filter((person)=>person.id !==id));
    }
    return(
        <div>
        <div>
            {people.map((person)=>{
                const {name,id}=person
                return(
                    <div className='clear-btn'>
                    <div key={id}>
                       <h2>{name}</h2>
</div>
<div>
<button onClick={()=>removeItem(id)}>remove</button>
</div>
                    </div>
                )
            })}
        </div>
        <div className='bottom-btn'>
        <button onClick={()=>setPeople([])}> clear All</button>
        </div>
        </div>
    )

}

export default Useobject;