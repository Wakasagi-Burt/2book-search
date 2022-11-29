import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createLink,
} from '@apollo/client';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';

const httpLink = createLink({
  uri: '/graphql',
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
            <Switch>
              <Route exact path='/' component={SearchBooks} />
              <Route exact path='/saved' component={SavedBooks} />
              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
            </Switch>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
