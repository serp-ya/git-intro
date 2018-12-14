'use strict';
const App = React.memo(() => (
  <div className="container">
    <div className="row">
     <div className="col text-center">
      <Logo />
     </div>
    </div>
  </div>
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);