import { useParams } from "react-router-dom";
function SpecificationMovie (){
    var params = useParams()
    console.log(params.movieId)
    return(
        <>
            <h1 className="text-4xl">SpecificationMovie</h1>
        </>
    )
}
export default SpecificationMovie;