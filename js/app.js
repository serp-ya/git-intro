'use strict';
const App = React.memo(() => (
  <div>
    <h1>Hello World!</h1>
  </div>
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);