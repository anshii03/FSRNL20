import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./UserModal.css"
import Spinner1 from '../../Common/Spinner/Spinner1';

function UserModal(props) {

    const {id, closeModal} = props;
    const [userData, setUserData] = useState(null);
    const [isLoading, changeIsLoading] = useState(true);


    useEffect(() => {
      fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
          changeIsLoading(false);
          setUserData(data);
          console.log(userData)
      });
    },[])


    function showUserDetails() {
      const {id, image, firstName, lastName, email} = userData;

      return (
        <div className='modalBody'>
          <img src={image}></img>
          <div>
            <p>id: {id}</p>
            <h5> Name: {`${firstName} ${lastName}`}</h5>
            <p> Email: {email} </p>
          </div>

        </div>
      )
    }


  return (
    <div
      className="modal show modalStyle"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog className='modalStyle'>
        <Modal.Header>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {isLoading ? <Spinner1/> : showUserDetails()}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}

export default UserModal;