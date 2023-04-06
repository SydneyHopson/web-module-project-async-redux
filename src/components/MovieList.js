import React from "react";
import { connect } from 'react-redux'

import Movie from './Movie';


const MovieList = props => {
   const state = { 
        newMovie: ''
    };
    const addMovie = e => {
        e.preventDefault();
        state.props.addMovie(state.newMovie)
    }

    const handleChange = e => state.setState ({ ...state, newMovie: e.target.value})
    console.log(handleChange)
    return (
        <div>
            <h2> User: {props.user.name} </h2>
            <p> Movie To Watch: {props.moviesToWatch}
            </p>
            
            {props.movie.map(movie => (
             <Movie movie={movie} />

            ))}
            <input onChange={state.handleChange} value={state.newMovie} />
            <button onClick={addMovie}>Add Movie</button>
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

export default connect(mapStateToProps, { addMovie })(MovieList);