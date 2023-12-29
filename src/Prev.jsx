import "./prev.css";
import { useContext } from "react";

import { AppProvider } from "./AppProvider";
export default function Prev() {
    const {getData,page,setLoading}  = useContext(AppProvider);


    function clickHandler() {
        setLoading(true);
        getData(page-1);

    }


    return(
        <button id="prevBtn" onClick={clickHandler}>Prev</button>
    );

}