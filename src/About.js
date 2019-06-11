import React from 'react';
import './about.css';

const About = () => (
  <main id="about">
    <h2>About this site</h2>
    <p>
      This website was created by{' '}
      <a href="https://twitter.com/thecamjackson">Cam Jackson</a> to demonstrate
      just one way that micro frontends can be implemented.
    </p>
    <p>
      Micro frontends is an architectural style where independently deliverable
      frontend applications are composed into a greater whole. It's useful for
      breaking up monolithic frontend codebases into smaller, simpler
      applications that can be delivered to production by multiple teams
      independently.
    </p>
    <p>
      To read more about the technique, including a full explanation of how the
      code for this demo works, check out the{' '}
      <a href="https://martinfowler.com/articles/micro-frontends.html">
        long-form article that Cam wrote for martinfowler.com
      </a>.
    </p>
    <p>
      If you just want to read the source code for yourself, it's all available
      on Github at{' '}
      <a href="https://github.com/micro-frontends-demo">
        https://github.com/micro-frontends-demo
      </a>.
    </p>
  </main>
);

export default About;
