import { Card } from 'react-bootstrap';

const _default = (props) => {
  return (
    <Card>
      <Card.Header className='bg-primary text-white'>{props.title}</Card.Header>
      <Card.Body>{props.children}</Card.Body>
    </Card>
  );
}

export default _default;
