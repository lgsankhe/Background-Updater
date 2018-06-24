import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './Components/SearchForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imgs: 'images/background-photo.jpg',
      loadingState: true
    };
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'sun') => {
    axios
      .get(
        //`https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${cred.APP_ID}`
        `https://api.unsplash.com/photos/random/?query=${query}&client_id=1d4c0a1f98330f1487872b4cbcd6145d6c197f0ce02d597f88b6de4530e36eb4`
      )
      .then(data => {
        this.setState({ imgs: data.data.urls.regular, loadingState: false });
      })
      .catch(err => {
        console.log('Error happened during fetching!', err);
      });
  };

  render() {
    document.body.style.backgroundImage = `url("${this.state.imgs}")`;
    return (
      <header className="container">
        <section className="content">
          <SearchForm onSearch={this.performSearch} />
        </section>
      </header>
    );
  }
}

export default App;
