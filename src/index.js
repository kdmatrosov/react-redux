/**
 * Created by root on 02.03.16.
 */

import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_YOUTUBE = 'AIzaSyDiHZT2mmAFYQx5e0lX5eVc7m8id81qdOg';

const App = () => {
    return (<div>
        <SearchBar/>
    </div>);
};
const container = document.querySelector('.container');
ReactDom.render(<App/>, container);