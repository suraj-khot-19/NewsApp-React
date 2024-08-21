import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 3;
  apiKey = process.env.REACT_APP_API_KEY;

  constructor() {
    super();
    this.state = {
      progress: 0,
      theme: 'light',
    };
    this.changeMode = this.changeMode.bind(this);
  }
  setProgress = (newProgress) => {
    this.setState({
      progress: newProgress
    });
  }

  changeMode() {
    if (this.state.theme === 'light') {
      this.setState({
        theme: 'dark'
      });
      document.body.style.color = 'white';
      document.body.style.backgroundColor = 'black';
    }
    else {
      this.setState({
        theme: 'light'
      });
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
    }
  }
  render() {
    return (
      <>
        <Router>
          <Navbar changeTheme={this.changeMode} theme={this.state.theme} />
          <LoadingBar
            color='#ff0092'
            progress={this.state.progress}
            height={2.5}
          />
          <Routes>
            <Route path='/' element={<News key='general' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="general" />} />
            <Route path='/business' element={<News key='business' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="business" />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="entertainment" />} />
            <Route path='/health' element={<News key='health' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="health" />} />
            <Route path='/science' element={<News key='science' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="science" />} />
            <Route path='/general' element={<News key='general' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="general" />} />
            <Route path='/sports' element={<News key='sports' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="sports" />} />
            <Route path='/technology' element={<News key='technology' pageSize={this.pageSize} theme={this.state.theme} topLoader={this.setProgress} apiKey={this.apiKey} country="in" category="technology" />} />
          </Routes>
        </Router>
      </>
    )
  }
}
