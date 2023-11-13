import loading from "./loading.gif";

const Spinner = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-center align-items-center">
          <div className="text-center my-3">
            <img src={loading} alt="loading" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
