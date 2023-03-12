import Thumbnail from "./Thumbnail"

function Results({results}) {
  
  return (
      <div className="p-3 my-2 sm:grid md:grid-cols-2 xl:grid-cols-4">
    {results.map(result=>(
        <Thumbnail key={result.id} result={result}/>
    ))}
    </div>
  )
}

export default Results