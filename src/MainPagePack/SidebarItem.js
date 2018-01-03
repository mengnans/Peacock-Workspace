import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'reactstrap';

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
                    <button onclick="openCity(event, 'Tokyo')">Videos</button>
                    <button onclick="openCity(event, 'Tokyo')">Torrents</button>
                    <button onclick="openCity(event, 'Tokyo')">Apps</button>
                    <button onclick="openCity(event, 'Tokyo')">Others</button>
                    <button onClick={this.props.onClick}>&lt;==</button>
                </div>
            </Container>
        );
    }
}