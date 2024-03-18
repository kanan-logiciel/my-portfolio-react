import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const UserProfile = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    setName(props.name);
    setAge(props.age);
    setState(props.state);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeName = (evt) => {
    setName(evt.target.value);
  };

  const onChangeAge = (evt) => {
    setAge(evt.target.value);
  };

  const onSubmit = (evt) => {
    const params = {
      name,
      age,
      state,
    };

    console.log(params);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <img
                src="images/profile.png"
                alt=""
                className="rounded mx-auto d-block"
              />
              <h3 className="text-center">User Information</h3>
            </div>
            <div className="card-body">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Name"
                  value={name}
                  onChange={onChangeName}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter Age"
                  value={age}
                  onChange={onChangeAge}
                />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={onSubmit}>
                Submit
              </Button>
              {/* <form>
                <>
                  <Form.Label htmlFor="userName">Name</Form.Label>
                  <Form.Control
                    type="text"
                    id="userName"
                    value={name}
                    onChange={onChangeName}
                  />
                </>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="age"
                    value={age}
                    onChange={() => {}}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="state"
                    value={state}
                    onChange={() => {}}
                  />
                </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
