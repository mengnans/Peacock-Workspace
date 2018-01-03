import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MainPageItemStyle.css';
import {Container} from 'reactstrap';

import {SidebarItem} from './SidebarItem.js';
import {NavigationItem} from './NavigationItem.js';
import {SideChatPage} from '../SideChatPagePack/SideChatPage.js';
import {FileManagePageItem} from '../ContentPagepack/FileManagePageItem.js';

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
                <NavigationItem onClick={() => this.OnChatBox_Clicked()}/>
                <Container fluid={true} className={'my-container'}>
                    <SidebarItem isSideBarFull={this.state.isSideBarFull}
                                 onClick={this.state.onClick}/>
                    <FileManagePageItem isSideChatTurnedOn={this.state.isSideChatTurnedOn}
                                        isSideBarFull={this.state.isSideBarFull}/>
                    <SideChatPage isSideChatTurnedOn={this.state.isSideChatTurnedOn}/>
                </Container>
            </Container>
        );
    }

    OnChatBox_Clicked() {
        alert("1");
        this.setState({
            isSideChatTurnedOn: !this.state.isSideChatTurnedOn,
        });
    }
}