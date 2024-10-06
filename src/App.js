import React,{useEffect,useState} from "react"
import axios from "axios"
function App (){
  // api call is made in comp did mount, and we want only comp did mount
  var [search,setSearch] = useState("") 
  var [searchMovie, setSearchMovie] = useState([]);

  var [popular,setPopular] = useState([]); 
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716")
    .then((res)=>{
      setPopular(res.data.results);
    },)
  },[])
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=cfe422613b250f702980a3bbf9e90716`)
    .then((res)=>{
      console.log(res.data.results)
      setSearchMovie(res.data.results);
    })
  },[search])
  return(
    <>
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">App component</h1>
      <input
      // Controlled Component...
      onChange={(e)=>{
        // console.log("onChange method is called")
        setSearch(e.target.value);
      }}
      value={search}
      className="w-[500px] h-[30px] rounded-lg border-[0px] outline-none bg-green-50 px-4 text-black font-bold placeholder:font-semibold"
      placeholder="Search for the movie or series..."
      />
      {
        search.length !== 0 ? <div>
          <h3
          className="text-start text-2xl font-bold p-5"
          >Search Results for {search}</h3>
          {/* <p> 
            Showing {searchMovie.length} out of {searchMovie.length} Movies
          </p> */}
        </div>: ""
      }
    </div>
      <div className="grid grid-cols-6 overflow-x-hidden">
     {
      // in input if it is empty
      search.length===0 ? 
        (
          popular.map((item,idx)=>{
            return(
              <div key={idx} className="transform translate-y-2 bg-[cornsilk] shadow-lg w-40 h-auto  rounded-xl  m-auto mb-5 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105">
              <img
              className="h-[80%] rounded-b-none rounded-t-lg  border-teal-100 border-2 "
              src={item.poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}` : "https://th.bing.com/th/id/OIP.P3Nx5kwYeeCBTPNd1dF7ygAAAA?pid=ImgDet&w=134&h=189&c=7"}
              alt={item.title}/>
              <div className="h-[100%] p-4 text-center text-[12px]">
                <p className="whitespace-nowrap overflow-hidden text-overflow-ellipsis">{item.title}</p>
              </div>
             </div>
            )
          })
          )
      :(
       searchMovie.length === 0 ? 
       <div className="w-[500px]">
         <h3
        className="text-start text-2xl font-bold p-5"
        >404 Movie Not found</h3>
         <img
         className="ml-[324px]"
         src="https://i.pinimg.com/originals/10/98/8c/10988c4441689260bb9a417f085bc1dc.jpg" alt="404"/>
       </div>:(
        searchMovie.map((item,idx)=>{
          return(
            <div key={idx} className="transform translate-y-2  shadow-lg w-40 h-auto  rounded-xl bg-[#100c0c] m-auto mb-5 overflow-hidden cursor-pointer hover:shadow-xl hover:scale-105">
            <img
            className="h-[80%] rounded-b-none rounded-t-lg  border-teal-100 border-2 "
            src={item.poster_path ? `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}` : "https://th.bing.com/th/id/OIP.P3Nx5kwYeeCBTPNd1dF7ygAAAA?pid=ImgDet&w=134&h=189&c=7"}
            alt={item.title}/>
            <div className="h-[100%] p-4 text-center text-[12px]">
              <p className="">{item.title}</p>
            </div>
           </div>
          )
        })
       )
      ) 
     }
      </div>
    </>
  )
}

export default App;