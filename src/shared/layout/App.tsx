import React from 'react';
import './App.css';
import Navigation from './Navigation';
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CategoryListPage from '../../features/category/pages/CategoryListPage';
import ModalContainer from '../components/containers/ModalContainer';
import NotificationContainer from '../components/containers/NotificationContainer';
import RequestSpinnerContainer from '../components/containers/RequestSpinnerContainer';
import BrandListPage from '../../features/brand/pages/BrandListPage';
import MaterialFormPage from '../../features/material/pages/MaterialFormPage';
import MaterialListPage from '../../features/material/pages/MaterialListPage';
import MaterialDetailPage from '../../features/material/pages/MaterialDetailPage';

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
          <Route path='/brand' component={BrandListPage} />

          {/* Material */}
          <Route path='/material' component={MaterialListPage} exact />
          <Route path='/material/:id' component={MaterialDetailPage} exact />
          <Route path='/material/new' component={MaterialFormPage} exact />
          <Route path='/material/edit/:id' component={MaterialFormPage} exact />
        </Container>
      </Router>
    </div>
  );
}

export default App;
