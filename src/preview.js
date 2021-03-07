import React from "react";
import './preview.css'


export default class preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            rank: this.props.rank,
            description: this.props.description
        }

    }


    render() {
        return (
            <div id="video-preview">
                <div id="preview-info">
                    <h1 className="white" id="title" >{this.state.title}</h1>
                    <h3 className="white" id="rank">{this.state.rank}</h3>
                    <p className="white" id="description">{this.state.description}</p>
                    <div id="button-holder">
                        <button id="play-button">Toista</button>
                        <button id="info-button">Lisätietoja</button>
                    </div>
                </div>
            </div>
        )
    }
}