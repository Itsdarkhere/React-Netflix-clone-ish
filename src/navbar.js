import './navbar.css'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faSearch, faBell, faSortUp  } from '@fortawesome/free-solid-svg-icons'
library.add(faGift);


export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navColor: '',
            logo: 'NETFLIX',
            frontpage: 'Etusivu',
            series: 'Sarjat',
            movies: 'Elokuvat',
            newPop: 'Uutta ja suosittua',
            own: 'Oma lista',
            kids: 'Lapset',
            profiles: ['Me', 'Brother', 'Freeloader']
        }
        this.handleScroll = this.handleScroll.bind(this);

    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        window.addEventListener('scroll', this.handleScroll)
    }
    handleScroll() {
        if (window.scrollY < 100) {
            this.setState({navColor: ''})
        } else if (window.scrollY >= 100) {
            this.setState({navColor: '#141414'})
        }   
    }


    render() {
        return (
            <div id="nav-bar" style={{backgroundColor: this.state.navColor}}>
                <div id="inner-bar-1">
                    <a id="logo" className="removeDec" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{this.state.logo}</a>
                    <a className="nav-item removeDec" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{this.state.frontpage}</a>
                    <a className="nav-item removeDec" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{this.state.series}</a>
                    <a className="nav-item removeDec" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{this.state.movies}</a>
                    <a className="nav-item removeDec" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><p>{this.state.newPop}</p></a>
                    <a className="nav-item removeDec" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">{this.state.own}</a>
                </div>
                <div id="inner-bar-2">
                    <FontAwesomeIcon icon={faSearch} style={{color: 'white'}}/>
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" className="nav-item removeDec">{this.state.kids}</a>
                    <FontAwesomeIcon icon={faGift} style={{color: 'white'}}/> 
                    <FontAwesomeIcon icon={faBell} style={{color: 'white'}}/>
                    <div id="ib2-inner">
                        <div id="profile-box"></div>
                        <FontAwesomeIcon icon={faSortUp} id="sortUp" />
                    </div>
                </div>
            </div>
        )
    }
}