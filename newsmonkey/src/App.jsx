import News from "./components/News";
import Navbar from "./components/navbar";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {

  apiKey = import.meta.env.VITE_NEWS_API

  state = {
    progress : 0
  }

  setProgress =(progress) =>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
          height={3}
          color="#f11946"
          progress={this.state.progress}
        />
        <Routes>
          <Route
            exact
            path="/general"
            element={
              <News setProgress = {this.setProgress} 
                key="general"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News setProgress = {this.setProgress} 
                key="business"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress = {this.setProgress} 
                key="entertainment"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress = {this.setProgress} 
                key="health"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress = {this.setProgress} 
                key="science"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress = {this.setProgress} 
                key="sports"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress = {this.setProgress} 
                key="technology"
                pageSize={this.pageSize}
                apiKey={this.apiKey}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    );
  }
}
