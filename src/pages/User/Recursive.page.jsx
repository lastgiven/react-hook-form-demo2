import { Col, Container, Row } from 'components/Grid/Grid.component';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { APP_CONTEXT } from 'utils/context';
import { FormProvider, useFieldArray, useForm, useFormContext } from 'react-hook-form';
import Button from 'components/Button/Button.component';
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

const RecursiveFieldArray = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'friends',
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div key={field.id} style={{ padding: '15px' }}>
          <input {...register(`friends.${index}.name`)} />
          <button type="button" onClick={() => remove(index)}>
            Delete
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => {
          append({ name: 'append' });
        }}
      >
        Append
      </button>
    </div>
  );
};

const Recursive = () => {
  const { setPageTitle } = useContext(APP_CONTEXT);
  const [data, setData] = useState({});

  const methods = useForm({
    defaultValues: {
      firstName: 'Werner',
      lastName: 'Potgieter',
      email: '',
      status: '',
    },
  });

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
          <FormProvider {...methods}>
            <RecursiveFieldArray />
            <Button.Primary type="button" onClick={methods.handleSubmit(submit)} value="Submit" />
          </FormProvider>
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

export default Recursive;
