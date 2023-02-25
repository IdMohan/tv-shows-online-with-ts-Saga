import produce from "immer";
import { AnyAction } from "redux";
import { } from "../actions";
import { Show } from "../models/Shows";
import { SHOWS_LOADED, SHOWS_QUERY_CHANGE } from "../actions/Shows";
import { schema, normalize } from "normalizr";



// this is how we store our state in the reducer
export type State = {
    shows: { [showId: number]: Show };
    query: {},
};

export const initialState: State = {
    shows: {},
    query: "",
};

function ShowReducer(state = initialState, action: AnyAction): State {
    switch (action.type) {
        case SHOWS_LOADED:
            return produce(state, (draft) => {
                const shows = action.payload as Show[];

                // if(shows.length === 0){
                //     draft.shows = {}
                //     return ;
                // }

                const showsSchema = new schema.Entity("shows")
                const normalizedData = normalize(shows, [showsSchema]);


                draft.shows =  normalizedData.entities.shows || {}
                //  this the best way to solve this type of show data in the ui   if the data   is   missing or not same as your search  type 

                // these all method is for if the your data  is undefined or empty then do this 

                //   draft.shows = { ...draft.shows, ...normalizedData.entities.shows };
            

                //   draft.shows =  normalizedData.entities.shows!;
                //   this is also working but we have define =  with if else condition

                
            });
        case SHOWS_QUERY_CHANGE:
            return produce(state, (draft) => {
                draft.query = action.payload;
            });

        default:
            return state;
    }
}

export default ShowReducer;