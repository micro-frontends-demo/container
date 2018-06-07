import React from 'react';

const attachScriptToPageHead = (name, src) => {
  const id = `micro-frontend-script-${name}`;
  if (document.getElementById(id)) {
    return;
  }

  const script = document.createElement('script');
  script.id = id;
  script.src = src;
  document.head.appendChild(script);
};

const renderMicroFrontend = name => {
  this.renderTimeout = null;
  if (window[`render${name}`]) {
    window[`render${name}`](`${name}-container`);
  } else {
    this.renderTimeout = setTimeout(() => renderMicroFrontend(name), 100);
  }
};

class MicroFrontend extends React.Component {
  componentDidMount() {
    attachScriptToPageHead(this.props.name, this.props.src);
    renderMicroFrontend(this.props.name);
  }

  componentWillUnmount() {
    clearTimeout(this.renderTimeout);
  }

  render() {
    return (
      <main id={`${this.props.name}-container`}></main>
    );
  }
};

export default MicroFrontend;
