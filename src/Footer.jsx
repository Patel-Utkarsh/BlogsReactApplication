import { useContext } from "react";
import NextBtn from "./NextBtn";
import Prev from "./Prev";
import "./footer.css"
import { AppProvider } from "./AppProvider";
export default function Footer() {
    const {page} = useContext(AppProvider);
    console.log(page);
    return(
        <div className="footerDiv">
            <div className="btnClass">

            {
                (page >= 2)?<Prev/>: "" 
            }

            {
                (page <= 5)?<NextBtn/>: "" 
            }



            </div>

        
 

        </div>

    );
}