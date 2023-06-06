import {Card, Button} from "react-bootstrap";

export default function Template(props) {
  return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.pic} />
  <Card.Body>
    <Card.Title>"{props.name}"</Card.Title>
    <Card.Text>
      {props.text}
    </Card.Text>
    <Button variant="primary" href={props.link}>Click here!</Button>
  </Card.Body>
</Card>
  )
}