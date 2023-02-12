import {Spinner} from "react-bootstrap";

function Spinner1() {
    return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
}

export default Spinner1