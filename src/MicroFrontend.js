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

class MicroFrontend extends React.Component {
  componentDidMount() {
    attachScriptToPageHead(this.props.name, this.props.src);
    this.renderMicroFrontend();
  }

  componentWillUnmount() {
    clearTimeout(this.renderTimeout);
  }

  renderMicroFrontend = () => {
    const { name, history } = this.props;

    if (window[`render${name}`]) {
      window[`render${name}`](`${name}-container`, history);
    } else {
      this.renderTimeout = setTimeout(this.renderMicroFrontend, 100);
    }
  };

  render() {
    return <main id={`${this.props.name}-container`} />;
  }
}

export default MicroFrontend;
