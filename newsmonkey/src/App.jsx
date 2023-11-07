import News from "./components/News";
import Navbar from "./components/navbar";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={this.pageSize}
                apiKey={"681d37a16f38415eaaa33d6ce7acc640"}
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
