import React, { useContext } from 'react'
import { KosarContext } from "../contexts/KosarContext";

function Kosar() {
    const { kosarLista } = useContext(KosarContext);
  return ( 
    <div>{kosarLista[0]}</div>
    
  )
}

export default Kosar