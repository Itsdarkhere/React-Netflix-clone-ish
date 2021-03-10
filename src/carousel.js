import './carousel.css'
// since I dont wanna build a db right now for this project, movies.css acts like one.
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faPlay, faPlus, faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
library.add(faChevronRight, faPlay, faPlus);


export default class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gategory: this.props.gategory,
            movies: this.props.movies,
            movieRow: this.props.movies[0],
            boxHover: false,
            movieHover: false,
            delayHandler: null,
            delayHandler2: null,
            popupOnline: false
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

    handleMouseEnter(index) {
        let popup = document.getElementById('popup' + index + this.props.index);
        let video = document.getElementById('video-rick' + index + this.props.index);
        this.setState({delayHandler: setTimeout(() => {
            popup.classList.add('movie-hover');
            video.play();
        }, 600)})
    }

    handleMouseLeave(index) {
        let popup = document.getElementById('popup' + index + this.props.index);
        let video = document.getElementById('video-rick' + index + this.props.index);

        //Once the popup opens it starts taking pointer events so naturally the movie no longer does, since that happens it
        //wants to close the popup, or not open it. So were putting a small timer on the event close, and if the popup is hovered
        // we kill that timer and it no longer closes the popup, took a while.
        
        if (popup.classList.contains('movie-hover')) {
            this.setState({delayHandler2: setTimeout(() => {
                popup.classList.remove('movie-hover')
                video.pause();
                video.currentTime = 0;
                clearTimeout(this.state.delayHandler)
            }, 100)})
        } else {
            clearTimeout(this.state.delayHandler)
        }
        
    }
    playMovie(index) {
        let popup = document.getElementById('popup' + index + this.props.index);
        popup.classList.remove('movie-hover');
        var video = document.getElementById('video-rick' + index + this.props.index);
        video.currentTime = 0;
        video.play();
        video.webkitRequestFullScreen();    
    }

    
 
    render() {
        return (
            <div id="list-container" onMouseLeave={() => this.setState({boxHover: false})} onMouseEnter={() => this.setState({boxHover: true})}>
                <h2 id="gategory">{this.state.gategory}</h2>
                <div id="video-popup-container">
                    {this.state.movieRow.map((movie, index) => {
                        if (!(index === 0 | index === 7)) {
                            return (
                                <div className="popup" id={'popup' + index + this.props.index} onMouseLeave={() => this.handleMouseLeave(index)} 
                                onMouseOver={() => clearTimeout(this.state.delayHandler2)}>
                                    <div id="movie-clip-container">
                                        <video className="video-rick" muted id={'video-rick' + index + this.props.index}>
                                            <source src="/pics/tron-clip.mp4" type="video/mp4"/>
                                        </video>
                                    </div>
                                    <div id="movie-info-container">
                                        <div id="actions">
                                            <div id="button-subcontainer-one">
                                                <div id="play-button-popup" className="round-button" style={{backgroundColor: 'white'}}
                                                onClick={() => this.playMovie(index)}>
                                                    <FontAwesomeIcon icon={faPlay} />
                                                </div>
                                                <div id="plus-button" className="round-button">
                                                    <FontAwesomeIcon icon={faPlus} style={{color: 'white'}}/>
                                                </div>
                                                <div id="thumbs-up-button" className="round-button">
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{color: 'white'}}/>
                                                </div>
                                                <div id="thumbs-down-button" className="round-button">
                                                    <FontAwesomeIcon icon={faThumbsDown} style={{color: 'white'}}/>
                                                </div>
                                            </div>  
                                            <div id="button-subcontainer-two">
                                                <div className="round-button">
                                                    <FontAwesomeIcon icon={faChevronRight} style={{transform: 'rotate(90deg)', color: 'white'} }/>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="info">
                                            <h4 id="personalization">98% sopiva</h4>
                                            <div id="pg">13+</div>
                                            <h4 id="length">Kesto</h4>
                                        </div>
                                        <div id="tags">
                                            <p className="white-p">Uskalias</p>
                                            <p className="white-p">Vakuuttava</p>
                                            <p className="white-p">Hauska</p>
                                        </div>
                                    </div>
                                </div>
                            )   
                        }
                    })}
                </div>
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
                                        style={{opacity: 0}} key={'movie-div'+ index}>
                                        <img className="round" id={'img-'+index} alt="movie" src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
                                    </div>
                                )
                            } else if (index === 7) {
                                return (            
                                    <div id={"movie-div-"+ index} className="movie" key={'movie-div'+ index}>
                                        <img className="round" id={'img-'+index} alt="movie"
                                        src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
                                    </div>
                                       
                                )
                            } else {
                                return (            
                                    <div id={"movie-div-"+ index} className="movie" key={'movie-div'+ index}
                                    onMouseEnter={() => this.handleMouseEnter(index)}
                                    onMouseLeave={() => this.handleMouseLeave(index)}>
                                        <img className="round" id={'img-'+index} alt="movie"
                                        src={process.env.PUBLIC_URL + "/pics/" + movie} 
                                        height="100%" width="100%"></img>
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