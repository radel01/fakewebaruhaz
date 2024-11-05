
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  /* axiosszal aszinkron módon GET kérést indítunk a végpont felé */
  
  const getAdat = async () => {
    try {
      const response = await myAxios.get("/products");
      console.log("adat: ", response.data);
      setTermekLista(response.data)
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor", err);
    } finally {
      
    }
  };
  //useffect hook
  useEffect(()=>{
    getAdat("/products");
  },
  []);

  return (
    <ApiContext.Provider value={{ termekLista }}>
      {children}
    </ApiContext.Provider>
  );
}