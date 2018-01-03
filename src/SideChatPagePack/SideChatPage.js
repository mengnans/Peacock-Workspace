import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'reactstrap';

export class SideChatPage extends React.Component {
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