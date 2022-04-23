
import React, { useEffect } from 'react';
import TodoFeature from './features/Todo';
import AlbumFeatures from './features/Album';
import { Route, Link, NavLink } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import productApi from './api/productApi';
import CounterFeature from './features/Counter';
import Header from './components/Header';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    }
    fetchProducts();
  }, []);


  return (
    <div className="App">
      <Header/>
      <p><Link to="/todos">Todos</Link></p>
      <p><Link to="/albums">Albums</Link></p>

      {/* <p><NavLink to="/todos" activeClassName='active-menu'>Todos</NavLink></p> */}
      {/* <p><NavLink to="/albums">Albums</NavLink></p> */}

      Home Page
      <Switch>
        <Redirect from='/home' to='/' exact />
        <Redirect from='/post-list/:postId' to='/posts/:postId' exact />
        {/* <Route path="/" component={TodoFeature} exact /> */}
        <Route path="/" component={CounterFeature} />
        <Route path="/todos-list" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeatures} />
        {/* <Route component={NotFound} /> */}
      </Switch>

    </div>
  );
}

export default App;
