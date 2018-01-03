import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPageItemStyle.css';
import {Container, Row} from 'reactstrap';

import {SidebarItem} from './SidebarItem.js';
import {NavigationItem} from './NavigationItem.js';
import {SideChatPage} from '../SideChatPagePack/SideChatPage.js';

export class MainPageItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSideChatTurnedOn: false,
            isSideBarFull: true,
        };
    }

    render() {
        return (
            <Container fluid={true} className={"my-web"}>
                <NavigationItem onClick={() => this.handleSideChatClick()}/>
                <MyContainer isSideChatTurnedOn={this.state.isSideChatTurnedOn}
                             isSideBarFull={this.state.isSideBarFull}
                             onClick={() => this.handleSideBarClick()}/>
            </Container>
        );
    }

    handleSideChatClick() {
        this.setState({
            isSideChatTurnedOn: !this.state.isSideChatTurnedOn,
        });
    }

    handleSideBarClick() {
        this.setState({
            isSideBarFull: !this.state.isSideBarFull,
        });
    }
}


function MyContainer(props) {
    return (
        <Container fluid={true} className={'my-container'}>
            <SidebarItem isSideBarFull={props.isSideBarFull} onClick={props.onClick}/>
            <MyContent isSideChatTurnedOn={props.isSideChatTurnedOn}
                       isSideBarFull={props.isSideBarFull}/>
            <SideChatPage isSideChatTurnedOn={props.isSideChatTurnedOn}/>
        </Container>
    );
}

class MyContent extends React.Component {
    render() {
        const sideBarClass = this.props.isSideBarFull ? 'my-content-with-side-bar-full' : 'my-content-without-side-bar-full';
        const sideChatClass = this.props.isSideChatTurnedOn ? 'my-content-with-side-chat-on' : 'my-content-with-side-chat-off';
        const classes = `my-content ${sideBarClass} ${sideChatClass}`;
        return (
            <Container id={"my-content"} fluid={true} className={classes}>
                <Row>

                </Row>
            </Container>
        );
    }
}