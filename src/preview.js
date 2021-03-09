import React from "react";
import './preview.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import Carousel from './carousel.js'
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faPlay)

export default class preview extends React.Component {

    
    //this needs to be passed to carousel so that it has movies to display
    movies = [['need-movies.jpg', 'maleficent-movie.jpg', 'oblivion.movies.jpg',
    'ironman-movie.jpg', 'sherlock-movie.jpg', 'shining-movie.jpg', 'tron-movie.jpg', 'ss-movie.jpg'], 
    ['tron-movie.jpg', 'ss-movie.jpg', '300-movie.jpg','aquaman-movie.jpg', 'brave-movie.jpg',
     'ca-movie.jpg', 'capmarvel-movie.jpg', 'dracula.movie.jpg'], 
    ['capmarvel-movie.jpg', 'dracula.movie.jpg', 'inception-movie.jpg', 'wolwerine.movie.jpg', 'fury.movie.jpg', 'gg-movie.jpg',
   'need-movies.jpg', 'maleficent-movie.jpg'], ['need-movies.jpg', 'maleficent-movie.jpg', 'oblivion.movies.jpg',
   'ironman-movie.jpg', 'sherlock-movie.jpg', 'shining-movie.jpg', 'tron-movie.jpg', 'ss-movie.jpg']
    ];
        
    render() {
        return (
            <div id="video-preview" style={{backgroundImage: 'url("/pics/'+ this.props.info[0] + '-movie.jpg")'}}>
                <div id="preview-info">
                    <h1 className="white" id="title" >{this.props.info[0]}</h1>
                    <h3 className="white" id="rank">{this.props.info[1]}</h3>
                    <div id="description-container">
                        <p className="white" id="description">{this.props.info[2]}</p>
                    </div>
                    <div id="button-holder">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{textDecoration: 'none'}}>
                            <button id="play-button"><FontAwesomeIcon icon={faPlay}/>Toista</button>
                        </a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" style={{textDecoration: 'none'}}>
                        <button id="info-button"><div id="info-circle"><strong>i</strong></div>Lisätietoja</button>
                        </a>
                    </div>
                </div>
                <Carousel gategory="Suosittuja netflixissä" movies={this.movies} index={0}/>
            </div>
        )
    }
}