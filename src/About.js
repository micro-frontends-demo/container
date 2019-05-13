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
      Cam is currently putting the finishing touches on a long-form article on
      micro frontends, which will explain both the concept, and this particular
      example website, in great detail. Once it's done, it will be posted on{' '}
      <a href="https://martinfowler.com">martinfowler.com</a>. So if you'd like
      to know more, then follow Cam (or{' '}
      <a href="https://twitter.com/martinfowler/">Martin</a>) on twitter, and
      you'll be first to see when the article is published!
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
