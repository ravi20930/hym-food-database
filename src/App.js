import './App.css';
import FoodListComponent from './components/FoodListComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CreateFood from './components/CreateFood';

function App() {
  return (
    <>
      <div className='container'>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" exact component={FoodListComponent} />
            <Route exact path="/foods" component={FoodListComponent}></Route>
            <Route exact path="/create-food/:id" component={CreateFood}></Route>
            <Route exact path="/:id" component={CreateFood}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
