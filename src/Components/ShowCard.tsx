import { Link } from "react-router-dom";
import { Show } from "../models/Shows";
import { FC, useEffect } from "react"; 


// we can do this mathod also but we are going to do a better user exprience for other way to define the show details 
// type ShowCardProps = {
//     title: string;
//     description: string;
//     id: number;
// }

type ShowCardProps = {
    show: Show;
}

const placeholderImage1 = "https://static.vecteezy.com/system/resources/thumbnails/002/267/298/small/tv-show-neon-signs-style-text-free-vector.jpg"

const placeholderImage2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNgyilHjIc3Ga9OGLk8tE8Fh2VF9mF6GFHSe1wFJKsrdg06FOqBqceLXRHOfU-BAXyUk&usqp=CAU"

const ShowCard: FC<ShowCardProps> = ({ show }) => {
    return (


        <div className="p-5">
            <div className="max-w-xs rounded-md shadow-md p-2 m-1 bg-gray-300">
                <div className="flex flex-wrap -m-4">
                    <div className="p-4">
                        <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                            <img src={show?.image?.medium || show?.image?.original || placeholderImage1} alt=""
                                className="object-cover object-center w-full rounded-t-md h-72" />

                            <div className="p-6">
                                <div className="flex items-center flex-wrap ">
                                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-800">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>1.2K</span>
                                    <span className="text-gray-500 inline-flex items-center leading-none text-sm">
                                        <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>200+</span>
                                </div>

                                <h1 className="text-3xl font-semibold tracking-wide mb-4">
                                    {show.name}
                                </h1>

                                <p className="leading-relaxed mb-3">
                                    {/* {show.summary} */}
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere possimus modi alias, sapiente, quia saepe doloremque harum laborum reprehenderit ...
                                </p>

                                <div className="flex justify-center">
                                    <button
                                        className="inline-flex text-white bg-red-500 border-0 py-2 px-2  focus:outline-none hover:bg-red-600 rounded text-md">Sort Details </button>

                                    <Link to={"/show/" + show.id}>
                                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                                            Full Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ShowCard;