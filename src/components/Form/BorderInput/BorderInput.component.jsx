import PropTypes from 'prop-types';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import { useFormContext } from 'react-hook-form';
import { StyledInput, Container } from './BoderInput.style';

const BorderInput = ({ name, registerOptions }) => {
  const {
    register,
    formState: { errors, isLoading },
  } = useFormContext();
  return (
    <Container>
      <StyledInput {...register(name, registerOptions)} disabled={isLoading} />
      <ErrorMessage errors={errors} name={name} />
    </Container>
  );
};

BorderInput.defaultProps = {
  registerOptions: {},
};

BorderInput.propTypes = {
  name: PropTypes.string.isRequired,
  registerOptions: PropTypes.object,
};

export default BorderInput;
