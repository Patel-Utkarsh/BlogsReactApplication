import { useState } from "react";
import { createContext } from "react";



export const AppProvider = createContext();

export default function AppContextProvider({children}) {
    const [loading,setLoading] = useState(true);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    async function getData(page=1) {
       
        const netCall = await fetch(`https://codehelp-apis.vercel.app/api/get-blogs?&page=${page}`);
        const data = await netCall.json();
        setLoading(false);
        setPosts(data.posts);
        setPage(data.page);

        
    


    }

    const value = {
        loading,setLoading,posts,setPosts,page,setPage,totalPages,setTotalPages,getData
    }


    return <AppProvider.Provider value={value}>{children}</AppProvider.Provider>

}

