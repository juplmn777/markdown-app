import React, { Component } from 'react';

import './App.css';
import marked from 'marked';
import { sampleText } from './sampleText';
import './fonts/authentic_signature/Authentic Signature.ttf';

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
        <h1 className="has-text-centered main-title">Markdown-App</h1>

        <div className="columns">
          <div className="column is-half">
            <div className="box">
              <h2 className="has-text-centered box-title">MarkDown</h2>
              <textarea
                className="textarea is-danger has-fixed-size"
                value={this.state.text}
                onChange={this.handleChange}
                rows="20"
              ></textarea>
            </div>
          </div>
          <div className="column is-half">
            <div className="box">
              <h2 className="has-text-centered box-title">Résultat html</h2>
              <div
                className="content"
                dangerouslySetInnerHTML={this.renderText(this.state.text)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
