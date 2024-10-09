
import {Routes,Route} from "react-router-dom";
import SpecificationMovie from "./SpecificationMovie";
import Trending from "./Trending";
import { useState, useEffect } from "react";
import axios from 'axios'

function App (){
  var [trendMovie,setTrendMovie]=useState([])
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
    .then((res)=>{
      setTrendMovie(res.data.results)
    })
  },[])
  return(
    <>
    <div className="text-center p-10">
      <input
      className="bg-gray-100 rounded-sm w-[480px] h-[25px]  outline-none text-black font-bold placeholder:text-gray-500  text-center mb-5"
      placeholder="search for the Movies or Series..."
      />
      <h1 className="text-2xl font-bold">Movies Search Engine</h1>
    </div>
   
      <Routes>
        <Route path="/" element={<Trending trendMovie={trendMovie}/>}  />
        <Route path="specification/:movieId" element={<SpecificationMovie/>} />
      </Routes>
    </>
  )
}

export default App;