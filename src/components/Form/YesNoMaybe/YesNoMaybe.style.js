import styled from 'styled-components';
import Styled from '../../../common/styles/Global.styles';

const Option = styled.div`
  width: auto;
  height: 25px;
  border: 1px solid ${(props) => (props.active ? 'green' : 'grey')};
  border-radius: 5px;
  padding: 0 15px;
  margin: 0 5px;
  display: inline-block;
`;

const Container = styled(Styled.Container)`
  background-color: unset;
`;

const StyledYesNoMaybe = {
  Container,
  Option
}
export default StyledYesNoMaybe;