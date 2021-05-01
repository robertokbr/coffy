import styled from 'styled-components/native';
import colors from '../../styles/colors';

interface ContainerProps {
  isShadow?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: ${prosp => 
    prosp.isShadow ? 'rgba(0, 0, 0, 0.5)' : colors.background
  };
`;