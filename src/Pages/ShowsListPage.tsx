import { FC, useEffect } from "react";
import { searchShows } from "../api";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { Show } from "../models/Shows";
import { ShowsLoadedAction, ShowsQueryChangeAction } from "../actions/Shows";
import { connect, ConnectedProps } from "react-redux";
import { State } from "../store";
import { showQuerySelector, showsSelector } from "../selectors/Shows";

type ShowDetailsPageProps = {query: any} & ReduxProps
    // shows: Show[];
    // query: any;
    // showsLoaded: (shows: Show[], query: string) => void;
    // showsQueryChange: (query: string) => void; 
 
const ShowsListPage: FC<ShowDetailsPageProps> =
    ({ shows, query, showsQueryChange
    }) => {
        
        return (
            <div className="mt-2">
                <SearchBar value={query} onChange={(event) => {
                    showsQueryChange(event.target.value)
                }}/> 
                    <div className="flex flex-wrap justify-evenly">
                        {shows.map((s) => (
                           <ShowCard key={s.id} show={s}></ShowCard>))}
                    </div>
                    
            </div>
        );
    };

const mapStateToProps = (state: State) => {
    return {
        query: showQuerySelector(state),
         shows: showsSelector(state),
    }
}

const mapDispatchToProps = {
    showsLoaded: ShowsLoadedAction,
    showsQueryChange: ShowsQueryChangeAction,
};

const connector = connect(mapStateToProps, mapDispatchToProps)

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(ShowsListPage); 

