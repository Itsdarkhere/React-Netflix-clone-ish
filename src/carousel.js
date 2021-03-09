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
            movies: this.props.movies,
            movieRow: this.props.movies[0],
            boxHover: false,
            movieHover: false
        }
        this.newRow = this.newRow.bind(this);
    }

    number = 0;

    newRow(direction) {
        //since I have multiple of these components, the index is needed to separate 
        let element1 = document.getElementById('back-button' + this.props.index);
        let element2 = document.getElementById('movie-div-0'+ this.props.index);
        if (getComputedStyle(element2).opacity !== 0) {
            element1.style.opacity = 0.6;
            element2.style.opacity = 1;
        }

        // I would think this is pretty self explanatory, but it moves to the next list in the array / gets the user new movies
        if (direction === 'forward') {
            if (this.number < 2) {
                this.number += 1;
            } else {
                this.number = 0;
            }

            this.setState({movieRow: this.state.movies[this.number]});

        } else {
            if (this.number > 0) {
                this.number -= 1;
            } else {
                this.number = 2;
            }
            this.setState({movieRow: this.state.movies[this.number]});
        }
    }


    render() {
        return (
            <div id="list-container" onMouseLeave={() => this.setState({boxHover: false})} onMouseEnter={() => this.setState({boxHover: true})}>
                <h2 id="gategory">{this.state.gategory}</h2>
                <div id="smaller-list-container">
                    <div id={'back-button' + this.props.index} className="btn-back" style={{opacity: 0}} onClick={() => this.newRow('back')}>
                        {this.state.boxHover &&(
                            <FontAwesomeIcon icon={faChevronRight} style={{color: 'white'}} className="fa-2x" id="back-icon"/>
                        )}
                    </div>
                    <div id="movie-list"> 
                        {this.state.movieRow.map((movie, index) => {
                            if (index === 0) {
                                //this one is just so i can track and make the first movie invisible
                                return (
                                    <div id={"movie-div-"+ index + this.props.index} className="movie" 
                                    style={{opacity: 0}} key={'movie-div'+ index} onMouseEnter={() => this.setState({movieHover: true})}>
                                        <img className="round" id={'img-'+index} alt="movie" src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
                                        {this.state.movieHover && (
                                            <div id="popup-box">
                                                <span id="to-center"></span>
                                                <div>
                                                    <p>Dang man bro mandingo</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            } else {
                                return (
                                    <div id={"movie-div-"+ index} className="movie" key={'movie-div'+ index}
                                    onMouseEnter={() => this.setState({movieHover: true})}>
                                        <img className="round" id={'img-'+index} alt="movie" src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
                                        {this.state.movieHover && (
                                            <div id="popup-box">
                                                <span id="to-center"></span>
                                                <div>
                                                    <p>Dang man bro mandingo</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div id="forward-button" onClick={() => this.newRow('forward')}>
                        {this.state.boxHover && (
                            <FontAwesomeIcon icon={faChevronRight} style={{color: 'white'}} className="fa-2x" id="forward-icon"/>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}