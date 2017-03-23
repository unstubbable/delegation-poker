/* @flow */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import App from '../src/App';

// Read the built index.html from the build directory.
const indexPath = path.join(__dirname, '..', 'build', 'index.html');
const inputPageHtml = fs.readFileSync(indexPath, 'utf-8');

// Render the app to a html string.
const appHtml = ReactDOMServer.renderToString(<App />);

// Insert the app html into the root node.
const rootNode = '<div id="root"></div>';
const rootNodeWithApp = `<div id="root">${appHtml}</div>`;
const output = inputPageHtml.replace(rootNode, rootNodeWithApp);

// Write the index.html with the inserted app html to the build directory.
fs.writeFileSync(indexPath, output);
