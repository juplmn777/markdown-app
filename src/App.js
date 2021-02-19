import React from 'react';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="container">
      <h1 className="title is-1 has-text-centered mt-5">Markdown-App</h1>

      <div className="columns">
        <div className="column is-half">
          <div className="box">
            <textarea
              class="textarea is-danger has-fixed-size"
              placeholder="Markdown Language"
              rows="20"
            ></textarea>
          </div>
        </div>
        <div className="column is-half">
          <div className="box">
            <h2 className="title is-3 has-text-centered">Résultat html:</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
