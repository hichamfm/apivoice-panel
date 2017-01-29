import React, {Component} from 'react';
import {Navbar, Nav, NavItem, Glyphicon, Image} from 'react-bootstrap';
import logo_netelip from 'logo_netelip.png';
import {multiStyle} from 'helpers';
let style;

class Lay extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect fluid>
                    <Navbar.Header>
                        <Image style={style.img} src={logo_netelip}/>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem><Glyphicon style={multiStyle(style, 'glyphicon', 'glyphSmall')} glyph="envelope"/>
                                <span style={style.blue} className="TopBar-blue">Ayúdanos</span>
                            </NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {this.props.children}
            </div>
        );
    }
}

export default Lay;

style = {
    container: {
        height: '100vh',
        marginTop: '0',
        marginLeft: '0'
    },
    navbar: {
        backgroundColor: 'rgb(74, 74, 74)',
        zIndex: 1010,
        width: '3000%',
        transform: 'translateX(-50%)',
        height: '70px',
        position: 'fixed'
    },
    glyphicon: {
      fontSize: '22px',
      top: '7px',
      marginRight: '3px',
      lineHeight: 0,
      color: 'rgb(51, 122, 183)',
    },
    glyphSmall: {
      fontSize: '15px',
      top: '2px',
      lineHeight: 0,
      color: 'rgb(51, 122, 183)',
    },
    blue: {
      color: 'rgb(51, 122, 183)',
    },
    img: {
      width: '30%',
      transform: 'translateY(10%)',
    }
}
