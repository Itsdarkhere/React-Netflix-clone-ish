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
        this.newRow = this.newRow.bind(this);
    }

    newRow() {
        //since I have multiple of these components, the index is needed to separate 
        let element1 = document.getElementById('back-button' + this.props.index);
        let element2 = document.getElementById('movie-div-0'+ this.props.index);
        if (getComputedStyle(element2).opacity !== 0) {
            element1.style.opacity = 0.6;
            element2.style.opacity = 1;
        }
    }


    render() {
        return (
            <div id="list-container">
                <h2 id="gategory">{this.state.gategory}</h2>
                <div id="smaller-list-container">
                    <div id={'back-button' + this.props.index} className="btn-back" style={{opacity: 0}}>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: 'white'}} className="fa-2x" id="back-icon"/>
                    </div>
                    <div id="movie-list"> 
                        {this.state.movies.map((movie, index) => {
                            if (index === 0) {
                                return (
                                    <div id={"movie-div-"+ index + this.props.index} className="movie" style={{opacity: 0}} key={'movie-div'+ index}>
                                        <img className="round" id={'img-'+index} alt="movie" src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
                                    </div>
                                )
                            } else {
                                return (
                                    <div id={"movie-div-"+ index} className="movie" key={'movie-div'+ index}>
                                        <img className="round" id={'img-'+index} alt="movie" src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div id="forward-button" onClick={this.newRow}>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: 'white'}} className="fa-2x" id="forward-icon"/>
                    </div>
                </div>
            </div>
        )
    }
}