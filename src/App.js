import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import React, { Fragment } from "react";
// import Blog from './Blog';


function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Blog">blog</Link></li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/Blog"  component={Blog} />

      </main>
  </Router>
          
  );   
}

const Blog = () => (
  <Fragment>
    <h1>Blog</h1>
    <Blog />
  </Fragment>
  );

  const Home = () => (
    <Fragment>
      <h1>Home</h1>
      <Blog />
    </Fragment>
    );

export default App;
