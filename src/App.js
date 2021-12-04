import './App.css';
import FoodListComponent from './components/FoodListComponent';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CreateFood from './components/CreateFood';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route>
              <Route path="/" exact component={FoodListComponent}></Route>
              <Route path="/foods" component={FoodListComponent}></Route>
              <Route path="/create-food" component={CreateFood}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
        <FoodListComponent />
      </div>
      <Footer />
    </>
  );
}

export default App;
