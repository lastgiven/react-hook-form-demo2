import PropTypes from 'prop-types';
import Button from 'components/Button/Button.component';
import { Col, Row } from 'components/Grid/Grid.component';
import { useFormContext } from 'react-hook-form';
import BorderInput from 'components/Form/BorderInput/BorderInput.component';
import YesNoMaybe from 'components/Form/YesNoMaybe/YesNoMaybe.component';

const UserForm = ({ submit }) => {
  const { handleSubmit } = useFormContext();
  return (
    <Row>
      <Col xs="6">
        <Row>
          <Col xs={4}>
            <BorderInput
              name="firstName"
              registerOptions={{
                required: 'Please provide a valid name',
              }}
            />
          </Col>
          <Col xs={4}>
            <BorderInput name="lastName" registerOptions={{ required: 'Please provide a valid lastName' }} />
          </Col>
          <Col xs={4}>
            <BorderInput name="email" registerOptions={{ required: 'Please provide a valid email' }} />
          </Col>
          <Col xs={4}>
            <YesNoMaybe name="status" registerOptions={{ required: 'Please provide a valid status' }} />
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Button.Primary type="button" onClick={handleSubmit(submit)} value="Submit" />
      </Col>
    </Row>
  );
};

UserForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default UserForm;
