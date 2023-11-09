import { Component } from "react";
import loading from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center" >
            <div className="text-center my-3">
              <img src={loading} alt="loading" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Spinner;
