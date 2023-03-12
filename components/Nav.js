import requests from "../Utils/requests";
import { useRouter } from "next/router";
function Nav() {
    const router=useRouter()
  return (
    <div className="flex px-10 sm:px-20 text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
        onClick={()=>router.push(`/?genre=${key}`)}
          key={key}
          className="cursor-pointer transtion duration-100 whitespace-nowrap transform hover:text-white hover:scale-125 active:text-red-500"
        >
          {title}
        </h2>
      ))}
    </div>
  );
}

export default Nav;
