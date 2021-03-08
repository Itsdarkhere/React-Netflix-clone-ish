import React from 'react';
import Carousel from './carousel.js'
import './gategories.css'



export default class Gategories extends React.Component {
    

    movies = [['ss-movie.jpg', 'tron-movie.jpg', 'ww-movie.jpg', 'wolwerine.movie.jpg', 'Jr-movie.jpg', 'gg-movie.jpg'], 
    ['dracula.movie.jpg', 'capMarvel-movie.jpg', 'inception-movie.jpg', 'brave-movie.jpg', 'shining-movie.jpg', 'CA-movie.jpg'],
    ['aquaman-movie.jpg', 'fury.movie.jpg', 'ss-movie.jpg', 'jr-movie.jpg', 'gg-movie.jpg', 'inception-movie.jpg']];
    gategory = ['Nousussa nyt', 'Jatka katselua', 'Toiminta ja seikkailu']

    render() {
        return (
            <div id="movie-box">
                {this.movies.map((list, index) => {
                    return (<Carousel 
                        gategory={this.gategory[index]}
                        movies={list} key={'carousel' + index}/>)
                })}
            </div>
        )
    }
}