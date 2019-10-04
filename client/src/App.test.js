import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
// import PlayersList from './components/PlayersList'
import {render} from '@testing-library/react'

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test('renders app without crashing', () =>{
    render(<App />);
});
test('World Cup header is found', () => {
  const { getByText } = render(<App />);

  // assert that the "lions" header is on the DOM
  getByText(/women's world cup/i);
});
