import { Form, Col } from "react-bootstrap";
import FormComponent from "../FormComponent";

const RightScreen = ({ sortedData }) => {
  return (
    <Col>
      <Form>
        {sortedData.map((data) => {
          return <FormComponent data={data} key={data.sort} />;
        })}
      </Form>
    </Col>
  );
};

export default RightScreen;
