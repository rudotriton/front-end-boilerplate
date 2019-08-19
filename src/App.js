import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from 'logo.svg';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  align-items: center;
  background-color: #282c34;
  color: white;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  justify-content: center;
  min-height: 100vh;
`;

const A = styled.a`
  color: ${(props) => props.theme.linkColor};
`;

const Logo = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
`;

const App = () => (
  <Wrapper>
    <Header>
      <Logo src={logo} className="App-logo" alt="logo" />
      <p>
        Edit
        {' '}
        <code>src/App.js</code>
        {' '}
        and save to reload.
      </p>
      <A
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </A>
    </Header>
  </Wrapper>
);

export default App;
