import React from 'react';

import './App.css';
import { Container, Description } from './Styles/styled';

function App() {
  return (
    <Container>
      <Description>
        <ul>
          This is a Dog App built with React JS Using the Dog API. The app uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux toolkit  for State Management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
          <li> Unit Tests With Jest & React Testing Library</li>
        </ul>
        <br />
      </Description>
    </Container>
  );
}

export default App;
