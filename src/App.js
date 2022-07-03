import TodoFeature from './features/Todo';
import AlbumFeatures from './features/Album';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import NotFound from './components/NotFound';
import CounterFeature from './features/Counter';
import Header from './components/Header';
import ProductFeature from 'features/Product';

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/posts/:postId" exact />

        <Route path="/" component={CounterFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeatures} />
        <Route path="/products" component={ProductFeature} />

        <Route component={NotFound} />
      </Switch>

    </div>
  );
}

export default App;
