import React from "react"
import './carousel.css'
// since I dont wanna build a db right now for this project, movies.css acts like one.
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

library.add(faChevronRight);



export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gategory: this.props.gategory,
            movies: this.props.movies
        }
    }


    render() {
        return (
            <div id="list-container">
                <h2 id="gategory">{this.state.gategory}</h2>
                <div id="smaller-list-container">
                    <div id="back-button">
                        <FontAwesomeIcon icon={faChevronRight} className="fa-2x" id="back-icon"/>
                    </div>
                    <div id="movie-list"> 
                        {this.state.movies.map((movie, index) => {
                            return (
                                <div className="movie">
                                    <img alt="movie" src={process.env.PUBLIC_URL + "/pics/" + movie} height="100%" width="100%"></img>
                                </div>
                            )
                        })}
                    </div>
                    <div id="forward-button">
                        <FontAwesomeIcon icon={faChevronRight} className="fa-2x" id="forward-icon"/>
                    </div>
                </div>
            </div>
        )
    }
}