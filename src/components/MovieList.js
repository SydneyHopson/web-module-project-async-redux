import React from "react";
import { connect } from 'react-redux'

import Movie from './Movie';


const MovieList = props => {
    return (
        <div>
            <h2> User: {props.user.name} </h2>
            <p> Movie To Watch: {props.moviesToWatch}
            </p>
            
            {props.movie.map(movie => (
             <Movie movie={movie} />

            ))}
        </div>
    );
};

const mapStateToProps = state => {
   return {
    movie: state.movies,
    moviesToWatch: state.moviesToWatch,
    user: state.user

   } 
}

export default connect(mapStateToProps, {})(MovieList);