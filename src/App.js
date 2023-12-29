import Card from "./Card"
import Header from "./Header"
import SingleCard from "./SingleCard"
import Footer from "./Footer"
import { useContext } from "react"
import { AppProvider } from "./AppProvider"
import Loader from "./Loader"
export default function App() {
  const {loading} = useContext(AppProvider);
  return (
    <div>

    <Header/>

    <Card/>
    <Footer/>
      

    
  
    

    </div>
    

  )
}
