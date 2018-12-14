'use strict';
const App = React.memo(() => (
  <div className="container">
    <div className="row">
     <div className="col text-center">
      <Logo />
     </div>
    </div>
    
    <div className="row">
     <div className="col">
      <p>
        {COMPANY_DESCRIPTION}. Наши преимущества:
      </p>
     </div>
    </div>
    
    <div className="row">
     <div className="col">
      <SimpleList items={COMPANY_ADVANTAGES} />
     </div>
    </div>
  </div>
));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);