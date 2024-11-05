import { createContext, useState } from "react";

export const KosarContext = createContext(""); //létrehozunk egy contextet

export const KosarProvider=({children})=>{
  const [kosarLista, setLista]=useState([]);
  
    function kosarba(termek){
      const slista=[...kosarLista];
      kosarLista.push(termek)
      setLista([...slista])
    }
  
    return <KosarContext.Provider value={{kosarLista, kosarba}}>
      {children}
    </KosarContext.Provider>;
}