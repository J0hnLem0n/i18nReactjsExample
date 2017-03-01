import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import locale from 'i18next';

class App extends Component {
  constructor(props) {
    super();
    this.state = {locale: 'ru'};
  }
  componentWillMount() {
    this.setLanguage(this.state.locale);
  }
  setLanguage(language) {
    locale.init({
      lng: language,
      resources: require('./'+language+'.json')
    });
    this.setState({'locale':language});
  }
  render() {
    return (
      <div>
        <div>
          <button onClick={this.setLanguage.bind(this, 'en')}>English</button>
          <button onClick={this.setLanguage.bind(this, 'ru')}>Русский</button>
        </div>
        <div>{locale.t('test_message')}</div>
      </div>
    )
  }
}

export default App;
