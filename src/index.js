import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// }
// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;
// const element = <h1>Hello, {formatName(user)}</h1>;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }
// setInterval(tick, 1000);

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
