import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize';
import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

const App = () => (
    <div className = "row">
        <div className = "col s6"><SongList/></div>
        <div className = "col s6"><SongDetail/></div>
    </div>
);

export default App;
