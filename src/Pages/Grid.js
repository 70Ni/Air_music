import React from 'react';

import ListCard from '../Components/Cards/ListCard/ListCard';


import './Grid.css';
import Card from '../Pages/Card'

function Grid() {
    return (
        <div className="container">
            <nav>NavBar</nav>
            <main>Main</main>
            <div id="SideBar">SideBar</div>
            <div id="container1">
                <Card />
            </div>
            <div id="container2">Content 2
            <Card />
            </div>
            <div id="container3">Content 3</div>
            <footer>footer</footer>
        </div>

    )
}

export default Grid;