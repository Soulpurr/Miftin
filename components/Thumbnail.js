import { ThumbUpIcon } from "@heroicons/react/solid"
import Image from "next/image"


function Thumbnail({result}) {
    const baseUrl='https://image.tmdb.org/t/p/original/'
  return (
    <div className="group p-2 cursor-pointer transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50  ">
        <Image layout="responsive" src={`${baseUrl}${result.backdrop_path || result.poster_path}` || `${baseUrl}${result.poster_path}`} height={1080} width={1920} />
        <div className="p-4">
            <h1 className="text-center text-2xl transition-all duration-100 ease-in-out group-hover:font-extrabold">{result.title || result.original_name}</h1>
            <h1 className="truncate items-center text-2xl">{result.overview}</h1>
            <p className="opacity-0 group-hover:opacity-100">{result.media_type&& `${result.media_type}`}--{result.release_date || result.first_air_date}
            <ThumbUpIcon className="h-5 mx-3 cursor-pointer"/> {result.vote_count}
            </p>
        </div>
    </div>
    
  )
}

export default Thumbnail