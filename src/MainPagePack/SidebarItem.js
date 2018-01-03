import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPageItemStyle.css';
import {Container} from 'reactstrap';

export class SidebarItem extends React.Component {
    render() {
        const sideBar = this.props.isSideBarFull ? 'my-sidebar-full' : 'my-sidebar-not-full';
        const classes = `my-sidebar ${sideBar}`;
        return (
            <Container className={classes}>
                <div class="tab">
                    <button onclick="openCity(event, 'London')" id="defaultOpen">All files</button>
                    <button onclick="openCity(event, 'Paris')">Photos</button>
                    <button onclick="openCity(event, 'Tokyo')">Docs</button>
                    <img></img>
                    <button onClick={this.props.onClick}>&lt;==</button>
                </div>
            </Container>
        );
    }
}