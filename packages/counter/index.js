import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react';

const reactLifeCycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
});

export const bootstrap = reactLifeCycles.bootstrap;
export const mount = reactLifeCycles.mount;
export const unmount = reactLifeCycles.unmount;
