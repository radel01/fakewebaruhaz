
import { createContext, useEffect, useState } from "react";
import { myAxios } from "./MyAxios";

export const ApiContext = createContext("");
export const ApiProvider = ({ children }) => {
  const [termekLista, setTermekLista] = useState([]);
  const [kattLista, setKattLista] = useState([]);
  /* axiosszal aszinkron módon GET kérést indítunk a végpont felé */
  
  const getAdat = async (vegpont, callbackFv) => {
    try {
      const response = await myAxios.get(vegpont);
      console.log("adat: ", response.data);
      callbackFv(response.data)
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor", err);
    } finally {
      
    }
  }; 
  const postAdat = async (vegpont, adat) => {
    try {
      const response = await myAxios.post(vegpont, adat);
      console.log("adat: ", response.data);
    
    } catch (err) {
      console.log("Hiba történt az adat elküldésekor", err);
    } finally {
    }
  };


  /* useEffect hook segítségével hívjuk meg az aszinkron get kéréseket aszinkron hívások esetén ne végtelen sokszor fusson le a kérés, hanem csak akkor, ha a függőségi listában változás türténik*/
  useEffect(() => {
    getAdat("/products", setTermekLista);
    getAdat("/products/categories", setKattLista);
  }, []);

  return (
    <ApiContext.Provider value={{ termekLista, kattLista, postAdat, getAdat}}>
      {children}
    </ApiContext.Provider>
  );
};