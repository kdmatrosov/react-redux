import React, {Component} from 'react';

//const VideoListItem = (props) => {
const VideoListItem = ({video, onVideoSelect}) => {
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="list-group-item" onClick={() => onVideoSelect(video)}>
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