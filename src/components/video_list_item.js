import React, {Component} from 'react';

//const VideoListItem = ({video}) => {
const VideoListItem = (props) => {
    const video = props.video;
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img class="media-object" src={imageUrl}/>
                    </div>
                    <div className="media-body">
                        <div class="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
        </li>
    );
};
export default VideoListItem;