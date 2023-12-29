import { useContext } from "react";
import "./nextbtn.css"
import { AppProvider } from "./AppProvider";

export default function NextBtn() {
    const {getData,page,setLoading}  = useContext(AppProvider);


    function clickHandler() {
        setLoading(true);
        getData(page+1);

    }

    return (
        <button id="nextBtn" onClick={clickHandler}>Next</button>
    );

}