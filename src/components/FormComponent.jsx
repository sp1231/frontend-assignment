import { Form, Row, Col } from "react-bootstrap";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";

const FormComponent = ({ data }) => {
  let renderItem;

  // const [fieldData, setFieldData] =useState([]);

  console.log(data);

  switch (data.uiType) {
    case "Input":
      renderItem = (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{data.label}</Form.Label>
          <Form.Control
            type="input"
            placeholder={data.placeholder}
            readOnly={data.validate.immutable}
            required={data.validate.required}
          />
        </Form.Group>
      );
      break;
    case "Number":
      renderItem = (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{data.label}</Form.Label>
          <Form.Control
            type="number"
            placeholder={data.placeholder}
            readOnly={data.validate.immutable}
            required={data.validate.required}
          />
        </Form.Group>
      );
      break;
    case "Group":
      renderItem = (
        <>
          {data.subParameters
            .sort((a, b) => a.sort - b.sort)
            .map((item, index) => {
              console.log(item);
              return <FormComponent data={item} key={index} />;
            })}
        </>
      );
      break;

    case "Radio":
      renderItem = (
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue={data.validate.defaultValue}
        >
          {data.validate.options.map((option) => {
            return (
              <ToggleButton
                id={`${option.value}`}
                value={option.value}
                key={option.value}
              >
                {option.label}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      );

      break;

    case "Select":
      renderItem = (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>{data.label}</Form.Label>
          <Form.Select
            aria-label="Default select example"
            defaultValue={data.validate.defaultValue}
          >
            {data.validate.options.map((option) => {
              return (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>
      );

      break;
  }
  return <>{renderItem}</>;
};

export default FormComponent;
