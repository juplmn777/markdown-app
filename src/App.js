import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import marked from 'marked';
import { sampleText } from './sampleText';

class App extends Component {
  state = {
    text: sampleText,
  };

  handleChange = (event) => {
    const text = event.target.value;
    this.setState({
      text,
    });
  };

  renderText = (text) => {
    const markedOptions = {
      sanitize: true,
    };
    const __html = marked(text, { markedOptions });
    return { __html };
  };

  render() {
    return (
      <div className="container">
        <h1 className="title is-2 has-text-centered mt-2">Markdown-App</h1>

        <div className="columns">
          <div className="column is-half">
            <div className="box">
              <h2 className="title is-4 has-text-centered">MarkDown</h2>
              <textarea
                class="textarea is-danger has-fixed-size"
                value={this.state.text}
                onChange={this.handleChange}
                rows="20"
              ></textarea>
            </div>
          </div>
          <div className="column is-half">
            <div className="box">
              <h2 className="title is-4 has-text-centered">Résultat html:</h2>
              <div className="content" dangerouslySetInnerHTML={this.renderText(this.state.text)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
