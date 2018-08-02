import {Component} from "react";
import React from "react";
import {Player} from 'video-react';
import "video-react/dist/video-react.css"; // import css

class Video extends Component {
    endTime = 0;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Player ref="player"
                        playsInline
                        poster="/assets/poster.png"
                        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            </div>
        );
    }

    componentDidMount() {
        this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    handleStateChange(state, prevState) {
        if (state.ended && state.readyState === 4 && this.endTime === 0) {
            ++this.endTime;
            state.readyState === 4 &&
            console.log(JSON.stringify(state));
            console.log('视频结束!');
        }
        // copy player state to this component's state
        this.setState({
            player: state,
            currentTime: state.currentTime
        });
    }

}

export default Video;
