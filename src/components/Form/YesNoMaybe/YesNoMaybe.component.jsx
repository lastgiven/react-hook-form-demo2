import PropTypes from 'prop-types';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';

const Option = styled.div`
  width: auto;
  height: 25px;
  border: 1px solid ${(props) => (props.active ? 'green' : 'grey')};
  border-radius: 5px;
  padding: 0 15px;
  margin: 0 5px;
  display: inline-block;
`;

const Container = styled.div`
  width: auto;
  padding: 15px;
`;

const YesNoMaybe = ({ name, registerOptions }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      rules={registerOptions}
      render={({ field: { onChange, value } }) => (
        <Container>
          <Container>
            <Option active={value === 'yes'} onClick={() => onChange('yes')}>
              yes
            </Option>
            <Option active={value === 'maybe'} onClick={() => onChange('maybe')}>
              maybe
            </Option>
            <Option active={value === 'no'} onClick={() => onChange('no')}>
              no
            </Option>
          </Container>
          <ErrorMessage errors={errors} name={name} />
        </Container>
      )}
    />
  );
};

YesNoMaybe.defaultProps = {
  registerOptions: {},
};

YesNoMaybe.propTypes = {
  name: PropTypes.string.isRequired,
  registerOptions: PropTypes.object,
};

export default YesNoMaybe;
