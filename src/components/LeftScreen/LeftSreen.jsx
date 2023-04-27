import { Form, Col } from "react-bootstrap";

const LeftScreen = ({ setData }) => {
  const handleFormChange = (event) => {
    setData(event.target.value);
  };
  return (
    <Col>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter JSON</Form.Label>
          <Form.Control as="textarea" rows={20} onChange={handleFormChange} />
        </Form.Group>
      </Form>
    </Col>
  );
};

export default LeftScreen;
