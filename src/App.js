import React from 'react';
import './App.css';

const tryRender = () => {
  if (window.renderBrowseMicrofrontend) {
    window.renderBrowseMicrofrontend('container');
  } else {
    setTimeout(tryRender, 100);
  }
}

class App extends React.Component {
  componentDidMount() {
    tryRender();
  }

  render() {
    return (
      <React.Fragment>
        <header>
          <div class="center-column">
            <h1>🍽 Feed me</h1>
          </div>
          <nav>
            <ol class="center-column">
              <li><a href="/">Browse restaurants</a></li>
              <li><a href="/">Surprise me</a></li>
              <li><a href="/">My Account</a></li>
            </ol>
          </nav>
        </header>
        <main id="container"></main>
      </React.Fragment>
    );
  }
}

export default App;
