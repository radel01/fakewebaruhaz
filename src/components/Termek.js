import React, { useContext } from "react";
import { KosarContext } from "../contexts/KosarContext";

function Termek(props) {
  const { kosarba } = useContext(KosarContext);

  return (
    <div className="card" >
        <img className="card-img-top" src={props.adat.image} alt="Card image"/>
        <div className="card-body">
            <h4 className="card-title">{props.adat.title}</h4>
            <p className="card-text">{props.adat.description}</p>
            <a href="#" className="btn btn-primary" onClick={kosarba(props.adat)}>Kosárba</a>
            <h4 className="card-title">{props.adat.price}€</h4>
        </div>
    </div>

  )
}

export default Termek