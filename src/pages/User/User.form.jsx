import PropTypes from 'prop-types';
import Button from 'components/Button/Button.component';
import { Col, Row } from 'components/Grid/Grid.component';

const UserForm = ({ submit }) => (
  <Row>
    INSERT FORM HERE
    <Col xs={12}>
      <Button.Primary type="button" onClick={() => submit({ hey: 'hi' })} value="Submit" />
    </Col>
  </Row>
);

UserForm.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default UserForm;
