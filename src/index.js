/**
 * Created by root on 02.03.16.
 */

import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_YOUTUBE = 'AIzaSyDiHZT2mmAFYQx5e0lX5eVc7m8id81qdOg';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null
		};

		this.videoSearch('Разведвопрос');
	}
	videoSearch(term)
	{
		YTSearch({key: API_YOUTUBE, term: term}, (videos) => {
			this.setState(
					{
						videos: videos,
						selectedVideo: videos[0] || null
					});

		});
	}
	render(){
		return (
			<div>
				<SearchBar onSearchTermChange={term => this.videoSearch(term)}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
						onVideoSelect={selectedVideo => this.setState({selectedVideo})}
						videos={this.state.videos}/>
			</div>
		);
	}
}
const container = document.querySelector('.container');
ReactDom.render(<App/>, container);