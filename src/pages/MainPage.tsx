import Selected from 'components/Selected';
import Styled from 'styled-components';
import Current from '../components/Current';

export default function Main() {
  return (
    <Flex>
      <Current />
      <Selected />
    </Flex>
  );
}

const Flex = Styled.div`
  display: flex;
  flex-flow: column;
`;