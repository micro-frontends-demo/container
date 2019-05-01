import React from 'react';
import { mount } from 'enzyme';
import MicroFrontend from '../MicroFrontend';

describe('MicroFrontend', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('renders the app straight away if it has already been downloaded', () => {
    const fakeWindow = { renderMyApp: jest.fn() };
    const fakeDocument = {
      getElementById: jest.fn(() => 'Some DOM element'),
    };
    const fakeHistory = 'I r history';

    const microFrontend = mount(
      <MicroFrontend
        name="MyApp"
        document={fakeDocument}
        window={fakeWindow}
        history={fakeHistory}
      />,
    );

    expect(fetch.mock.calls.length).toEqual(0);
    expect(fakeWindow.renderMyApp).toHaveBeenCalledWith(
      'MyApp-container',
      fakeHistory,
    );
  });

  it('downloads and renders the app if it has NOT already been downloaded', async () => {
    const fakeScriptElement = {};
    const fakeWindow = { renderMyApp: jest.fn() };
    const fakeDocument = {
      getElementById: jest.fn(() => null),
      createElement: jest.fn(() => fakeScriptElement),
      head: {
        appendChild: jest.fn(),
      },
    };
    const fakeHistory = 'I r history';

    fetch.mockResponse(JSON.stringify({ 'main.js': '/myScript.js' }));

    const microFrontend = mount(
      <MicroFrontend
        name="MyApp"
        host="http://example.com"
        document={fakeDocument}
        window={fakeWindow}
        history={fakeHistory}
      />,
    );

    // it fetches the manifest...
    expect(fetch.mock.calls).toEqual([
      ['http://example.com/asset-manifest.json'],
    ]);
    await new Promise(setTimeout);

    // then it creates a script element with the right attributes...
    expect(fakeDocument.createElement).toHaveBeenCalledWith('script');
    expect(fakeScriptElement.id).toEqual('micro-frontend-script-MyApp');
    expect(fakeScriptElement.src).toEqual('http://example.com/myScript.js');
    expect(fakeDocument.head.appendChild).toHaveBeenCalledWith(
      fakeScriptElement,
    );

    // then once the script loads it renders the app
    fakeScriptElement.onload();
    expect(fakeWindow.renderMyApp).toHaveBeenCalledWith(
      'MyApp-container',
      fakeHistory,
    );
  });
});
