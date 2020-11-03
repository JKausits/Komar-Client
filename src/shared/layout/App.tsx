import React from 'react';
import './App.css';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CategoryListPage from '../../features/category/pages/CategoryListPage';
import ModalContainer from '../components/containers/ModalContainer';
import NotificationContainer from '../components/containers/NotificationContainer';
import RequestSpinnerContainer from '../components/containers/RequestSpinnerContainer';

function App() {


  return (
    <div>
      <ModalContainer />
      <NotificationContainer />
      <RequestSpinnerContainer />
      <Router>
        <Navigation />
        <Container className='mt-2 page-container'>
          <Route path='/category' component={CategoryListPage} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
