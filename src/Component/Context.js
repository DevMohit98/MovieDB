import React, {  useContext, useEffect, useState } from "react"
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`
const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [Loading,setLoading]=useState(true);
    const [error,setError]=useState({show:false,msg:""});
    const [movies,setMovies]=useState([]);
    const [query,setQuery]=useState('Batman');
    const fetchMovies=async(url)=>{
        setLoading(true);
        try{
const response=await fetch(url);
const data=await response.json();
console.log(data);
if(data.Response==='True')
{
    setMovies(data.Search);
    setError({show:false})
}
else
{
    setError({show:true,msg:data.Error})
}
setLoading(false);
        }
        catch(error)
        {
console.log(error);
        }

    }
    useEffect(()=>{
        fetchMovies(`${API_ENDPOINT}&s=${query}`)
    },[query])
    return <AppContext.Provider value={
        {
        Loading,
        error,
        movies,
        query,
        setQuery
        }
    }>
        {children}
    </AppContext.Provider>
}
export const useGlobalConetxt=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}