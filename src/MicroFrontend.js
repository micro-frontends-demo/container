import React from 'react';

class MicroFrontend extends React.Component {
  componentDidMount() {
    this.attachScriptToPageHead();
    this.renderMicroFrontend();
  }

  componentWillUnmount() {
    clearTimeout(this.renderTimeout);
  }

  attachScriptToPageHead = () => {
    const { name, src } = this.props;
    const id = `micro-frontend-script-${name}`;

    if (document.getElementById(id)) {
      return;
    }

    const script = document.createElement('script');
    script.id = id;
    script.src = src;
    document.head.appendChild(script);
  };

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
