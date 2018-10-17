import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../redux/reducer/common';

const store = createStore(
    reducer
);

export default class cms extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}