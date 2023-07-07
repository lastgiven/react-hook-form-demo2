import { Col, Container, Row } from 'components/Grid/Grid.component';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { APP_CONTEXT } from 'utils/context';
import Form from './User.form';

const Pre = styled.div`
  color: white;
  background-color: #242a4d;
  padding: 25px;
  border-radius: 10px;
  h2 {
    margin-top: 0;
  }
`;

const Form1 = () => {
  const { setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});
  useEffect(() => {
    setPageTitle('Create User');
  });

  const submit = (values) => {
    setData(values);
  };

  return (
    <Container>
      <Row>
        <Col sm={6}>
          <h2 style={{ marginTop: 0, color: 'white' }}>Simplistic form demo</h2>
          <Form submit={submit} />
        </Col>
        <Col sm={6}>
          <Pre>
            <h2>JSON Preview:</h2>
            <pre>{JSON.stringify(data, undefined, 2)}</pre>
          </Pre>
        </Col>
      </Row>
    </Container>
  );
};

export default Form1;
