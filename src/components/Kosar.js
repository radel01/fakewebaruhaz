import React, { useContext } from 'react'
import { KosarContext } from "../contexts/KosarContext";

function Kosar() {
    const { kosarLista } = useContext(KosarContext);
    return ( 
        kosarLista.map((termek)=>{
            return <div>{termek.title}</div>
        })
    
    
  )
}

export default Kosar