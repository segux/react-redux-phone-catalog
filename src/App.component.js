import React, { Component } from 'react';
import PropTypes from 'prop-types';


// Components
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Spinner } from 'react-redux-spinner';
import { Link } from 'react-router-dom';

import Content from './components/Content.component'

// Store
import AppStore from './App.store';

import { getPhones } from './actionCreators/phones.actions';

// Styles
import './App.styles.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Spinner />
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              Phones
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem href="#">
              <Link to='/'>
                Phone Catalog
              </Link>
            </NavItem>
          </Nav>
        </Navbar>
        <Content body={children} />
      </div>
    );
  }
  componentDidMount() {
    AppStore.dispatch(getPhones());
  }
}

export default App;
