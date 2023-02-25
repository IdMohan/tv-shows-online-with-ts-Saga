import { Link } from "react-router-dom";
import { Show } from "../models/Shows";
import { FC } from "react";

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


        <div className="grid bg-orange-300 w-screen">
            <div className="max-w-xs rounded-md shadow-md p-2 m-1 bg-gray-300">
                <img src={show?.image?.medium || show?.image?.original || placeholderImage1} alt="" className="object-cover object-center w-full rounded-t-md h-72" />

                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>

                        <Link to={"/show/" + show.id}>
                            <p className="mt-4 bg-black text-white text-xl font-mono font-semibold">View Sort Demo</p>
                        </Link>
                    </div>

                    <Link to={"/show/" + show.id}
                        className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md">
                        View Details
                    </Link>
                </div>
            </div>
        </div>

    )
};

export default ShowCard;