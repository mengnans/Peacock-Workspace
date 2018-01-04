import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './NavigationItemStyle.css';

export class NavigationItem extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-md navContainer">
                <div class="navLogoArea">
                    <div class="navLogo"></div>
                </div>
                {/*<img class="navLogo" width="36" height="36"/>*/}
                {/*<img class="navLogo" width="48" height="48"/>*/}

                <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Settings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Profile</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Help</a>
                        </li>
                    </ul>
                    <form class="form-inline mt-2 mt-md-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search"
                               aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search
                        </button>
                    </form>
                </div>

                <span class="lets-chat-btn" onClick={this.props.onClick}>&ensp;
                    Let's chat&ensp;&#9776;</span>
            </nav>
        );
    }
}