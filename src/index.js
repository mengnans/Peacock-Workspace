import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import {Container, Row, Col} from 'reactstrap';

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
                <Header onClick={() => this.handleSideChatClick()}/>
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

class MySidebar extends React.Component {
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
            <MySidebar isSideBarFull={props.isSideBarFull} onClick={props.onClick}/>
            <MyContent isSideChatTurnedOn={props.isSideChatTurnedOn} isSideBarFull={props.isSideBarFull}/>
            <MySideChat isSideChatTurnedOn={props.isSideChatTurnedOn}/>
        </Container>
    );
}

class MySideChat extends React.Component {

    render() {
        const sideChat = this.props.isSideChatTurnedOn ? 'my-side-chat-on' : 'my-side-chat-off';
        const classes = `my-side-chat ${sideChat}`;
        return (
            <Container className={classes}>
                <div id="mySideChat">
                    <a href="javascript:void(0)" class="closebtn">&times;</a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
                </div>
            </Container>
        );
    };

}

function Header(props) {

    return (
        <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a class="navbar-brand d-inline-block align-top" href="#">
                <img class="peacock-brand" width="30" height="30"/>
                &ensp;Peacock
            </a>

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
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>

            <span class="lets-chat-btn" onClick={props.onClick}>&ensp;Let's chat&ensp;&#9776;</span>
        </nav>

    );
}

// ========================================

ReactDOM.render(
    <Web/>,
    document.getElementById('root')
);

