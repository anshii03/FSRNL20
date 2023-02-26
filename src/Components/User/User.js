import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./User.css"

function User(props) {

    // Object destructuring
    const {details, openModal} = props;

    function seeFullDetails() {
        openModal(details.id);
    }

    return (
        <div className="userCard">
            <Card>
                <div className="userContent">
                <Card.Img variant="top" src={details.image} className="img" />
                <Card.Body>
                    <Card.Title>{details.username}</Card.Title>
                    <Card.Text className="description">
                        {details.firstName}
                    </Card.Text>
                    <Button variant="primary" onClick={seeFullDetails}>Show Details</Button>
                </Card.Body>
                </div>    
            </Card>    
        </div>
          
    )
}

export default User