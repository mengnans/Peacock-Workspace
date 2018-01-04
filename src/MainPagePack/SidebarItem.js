import React from 'react';
import './SidebarItemStyle.css';
import {Container} from 'reactstrap';

export class SidebarItem extends React.Component {
    render() {
        const sideBar = this.props.isSideBarFull ? 'my-sidebar-full' : 'my-sidebar-not-full';
        const classes = `my-sidebar ${sideBar}`;
        return (
            <Container className="my-sidebar sidebarContainer">
                <div class="tab">
                    <div className="sidebarButtonSelected" href="#">
                        <a herf="#">
                            <div className="sidebarButton" id="btnFilePage"/>
                        </a>
                    </div>
                    <div href="#">
                        <div className="sidebarButton" id="btnWorkflowPage"/>
                    </div>
                </div>
            </Container>
        );
    }
}