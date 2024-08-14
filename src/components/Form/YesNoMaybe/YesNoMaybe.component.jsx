import PropTypes from 'prop-types';
import ErrorMessage from 'components/Error/ErrorMessage.component';
import { Controller, useFormContext } from 'react-hook-form';
import S from './YesNoMaybe.style';

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
        <S.Container>
          <S.Container>
            <S.Option active={value === 'yes'} onClick={() => onChange('yes')}>
              yes
            </S.Option>
            <S.Option active={value === 'maybe'} onClick={() => onChange('maybe')}>
              maybe
            </S.Option>
            <S.Option active={value === 'no'} onClick={() => onChange('no')}>
              no
            </S.Option>
          </S.Container>
          <ErrorMessage errors={errors} name={name} />
        </S.Container>
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
