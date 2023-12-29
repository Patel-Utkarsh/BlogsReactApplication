import { useContext, useEffect } from "react";
import { AppProvider } from "./AppProvider";
import SingleCard from "./SingleCard";
import "./card.css"
import Loader from "./Loader";

export default function Card() {
    const {posts,getData,loading} = useContext(AppProvider);
    useEffect(()=>{
        getData();
    },[]);

    console.log(posts);


    return(

        <div className="cardDiv"> {

            loading ? <Loader/> : 
            
                posts.map((crd)=>{
                    console.log(crd);
                    return <SingleCard values = {crd}/>
                    
                })

                
            

           
            
            }
        </div>
    );
    
}