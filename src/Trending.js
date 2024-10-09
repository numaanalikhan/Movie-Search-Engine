import { Link } from 'react-router-dom'
function Trending({trendMovie}) {
   
  return (
<>
            <h1 className="">Today's Trending Movies</h1>
          <div className=" grid grid-cols-4 ">
            
              {
                trendMovie.map((item,idx)=>{
                  return(
                  <>
                   <div key={idx} className=" w-56 h-auto border-2 border-white mb-5 rounded-lg overflow-hidden">
                    <img
                    className="h-[85%] w-full p-1 rounded-lg"
                    src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${item.poster_path}`}
                    alt={item.title}/>
                    <div className="text-center mb-8">
                      <p className="font-bold mb-2" >{item.title.slice(0,20)}...</p>
                      <Link to={`specification/${item.id}`}>   <button className="text-[12px] border-2 bg-black px-4 py-1 font-bold ">Watch Movie</button></Link>
                    </div>
                   </div>
                  </>)
                })
              }
            </div>
</>
)
}

export default Trending