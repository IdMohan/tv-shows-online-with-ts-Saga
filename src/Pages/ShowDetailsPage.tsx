import { FC } from "react";
import { Link } from "react-router-dom"
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { AiOutlineRollback } from "react-icons/ai"
import { ConnectedProps, connect } from "react-redux";
import { State } from "../store";
import { Show } from "../models/Shows";
import { showsMapSelector } from "../selectors/Shows";

type OwnProps = WithRouterProps

type ShowDetailsPageProps = ReduxProps & OwnProps;

const placeholderImage1 = "https://static.vecteezy.com/system/resources/thumbnails/002/267/298/small/tv-show-neon-signs-style-text-free-vector.jpg"

const placeholderImage2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNgyilHjIc3Ga9OGLk8tE8Fh2VF9mF6GFHSe1wFJKsrdg06FOqBqceLXRHOfU-BAXyUk&usqp=CAU"

const ShowDetailsPage: FC<ShowDetailsPageProps> = ({ params, show }) => {
    console.log(params);

    return (
        <div className="mt-2">

            <Link to="/">
                <AiOutlineRollback className="text-5xl border border-1 px-2 py-2"> </AiOutlineRollback>Home
            </Link>

            <h2 className="text-4xl text-center font-semibold tracking-wide">{show.name}</h2>
            <div className="flex space-x-5 my-2 bg-gray-300 p-2 rounded-sm">
                {show.genres.map(genres =>
                    <GenrePill name={genres} key={genres} />
                )
                }
            </div>

            <div className="mt-2 flex">

                <img src={show.image?.original || placeholderImage2 || placeholderImage1} alt=""
                    className="object-cover object-center w-full rounded-t-md h-96" />

                <div className="ml-2">
                    {show.summary && 
                    <p className="mt-2 p-6 text-xl" dangerouslySetInnerHTML={
                        { __html: show.summary || "" }}></p>}
                   
                    {/* here this is normal in React to hide any your data fromm your Ui */}

                    {show.rating.average && <p className="mt-2 text-lg font-bold border border-gray-700 rounded-md px-2 py-1 max-w-max">
                        Rating:
                        <span className="text-gray-700"> {show.rating.average}/10</span>
                    </p>}
                </div>
            </div>

            <div className="mt-2">
                <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
                <div className="flex flex-wrap">
                    <CastCard avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg" name="Henry Cavill" />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
                        name="Freya Allan"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
                        name="Anya Chalotra"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
                        name="Mimi Ndiweni"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
                        name="Henry Cavill"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
                        name="Freya Allan"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
                        name="Anya Chalotra"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
                        name="Mimi Ndiweni"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
                        name="Henry Cavill"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
                        name="Freya Allan"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
                        name="Anya Chalotra"
                    />
                    <CastCard
                        avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
                        name="Mimi Ndiweni"
                    />
                </div>
            </div>
        </div>

    );
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    return { show: showsMapSelector(state)[+ownProps.params.showId] }
};

const connector = connect(mapStateToProps)
type ReduxProps = ConnectedProps<typeof connector>

export default withRouter(connector(ShowDetailsPage)); 