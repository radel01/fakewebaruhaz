import React, { useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";

function TablazatSor(props) {
  return (
          <tr>
            <td scope="row" value={props} >{props.elem.id}</td>
            <td  value={props} >{props.elem.title}</td>
            <td  value={props}>{props.elem.price}</td>
            <td  value={props} >{props.elem.category}</td>
            <td  value={props} >{props.elem.description}</td>
            <td><img src={props.elem.image} alt="{props.image}" height="100"></img></td>
            <td><button type="button" class="btn btn-dark">Törlés</button></td>
          </tr>
  );
}

export default TablazatSor;