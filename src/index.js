import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Container, Row, Col} from 'reactstrap';

import {SideBarItem} from './MainPagePack/SideBarItem.js';
import {NavigationItem} from './MainPagePack/NavigationItem.js';
import {SideChatPage} from './SideChatPagePack/SideChatPage.js';

class Web extends React.Component {

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

function MyContainer(props) {
    return (
        <Container fluid={true} className={'my-container'}>
            <SideBarItem isSideBarFull={props.isSideBarFull} onClick={props.onClick}/>
            <MyContent isSideChatTurnedOn={props.isSideChatTurnedOn}
                       isSideBarFull={props.isSideBarFull}/>
            <SideChatPage isSideChatTurnedOn={props.isSideChatTurnedOn}/>
        </Container>
    );
}


// ========================================

ReactDOM.render(
    <Web/>,
    document.getElementById('root')
);