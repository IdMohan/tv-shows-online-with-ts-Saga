import axios from "axios"
import { Show } from "./models/Shows";

export const searchShows = (keyword: string) => {
    return axios.get<{ show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword).then(response => response.data.map((item) => item.show))
};


    // this is long method to do so we shoting the array with map in the upper and this api giving the main data already so we use not this long method 
    //  const responseArr = [{ score: 0.87, shows: { title: "Game of Thrones"} }, { }]
    //  const shows =  [
    //       { title: "Game of Thrones" }
    //  ]
 