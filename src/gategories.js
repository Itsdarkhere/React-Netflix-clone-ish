import React from 'react';
import Carousel from './carousel.js'
import './gategories.css'



export default class Gategories extends React.Component {
    
    //should be 18 to be sent, 3 lists in each per list
    movies = [[['need-movies.jpg',
    'wolwerine.movie.jpg', '300-movie.jpg','aquaman-movie.jpg', 'brave-movie.jpg', 'ca-movie.jpg',
     'capmarvel-movie.jpg', 'dracula.movie.jpg'], ['capmarvel-movies.jpg', 'dracula.movie.jpg', 'oblivion.movies.jpg',
    'ironman-movie.jpg', 'sherlock-movie.jpg', 'shining-movie.jpg', 'tron-movie.jpg', 'ss-movie.jpg'], ['tron-movie.jpg', 'ss-movie.jpg', 'fury.movie.jpg',
   'gg-movie.jpg', 'inception-movie.jpg', 'wolwerine.movie.jpg', 'need-movies.jpg', 'wolwerine.movie.jpg']],
   [['need.movies.jpg', 'inception-movie.jpg', 'fury.movie.jpg',    
    'ironman-movie.jpg', 'sherlock-movie.jpg', 'gg-movie.jpg', 'tron-movie.jpg', 'fury.movie.jpg'],['tron-movie.jpg',
     'fury.movie.jpg', '300-movie.jpg','aquaman-movie.jpg', 'brave-movie.jpg', 'ca-movie.jpg',
      'capmarvel-movie.jpg', 'dracula.movie.jpg'], ['capmarvel-movie.jpg', 'dracula.movie.jpg', 'fury.movie.jpg',
   'gg-movie.jpg', 'inception-movie.jpg', 'wolwerine.movie.jpg', 'need-movies.jpg', 'maleficent-movie.jpg']],
   [['need-movies.jpg', 'maleficent-movie.jpg', 'oblivion.movies.jpg',
    'ironman-movie.jpg', 'tron-movie.jpg', 'shining-movie.jpg', 'sherlock-movie.jpg', 'brave-movie.jpg'],['sherlock-movie.jpg',
     'brave-movie.jpg', '300-movie.jpg','aquaman-movie.jpg', 'ww-movie.jpg', 'ca-movie.jpg',
      'capmarvel-movie.jpg', 'dracula.movie.jpg'], ['capmarvel-movie.jpg', 'dracula.movie.jpg', 'fury.movie.jpg',
   'gg-movie.jpg', 'inception-movie.jpg', 'wolwerine.movie.jpg', 'need-movies.jpg', 'maleficent-movie.jpg']]]

    //Could definately include gategory into movies later
    gategory = ['Nousussa nyt', 'Jatka katselua', 'Toiminta ja seikkailu']

    render() {
        return (
            <div id="movie-box">
                {this.movies.map((list, index) => {
                    return (<Carousel 
                        gategory={this.gategory[index]}
                        movies={list} key={'carousel' + index} index={index + 1}/>)
                })}
            </div>
        )
    }
}