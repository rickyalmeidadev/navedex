import styled from 'styled-components';
import { ReactComponent as CloseIcon } from '../../assets/icons/close.svg';

export const Container = styled.article`
  position: relative;
  max-width: 1007px;
  max-height: 100vw;

  overflow: scroll;

  @media (min-width: 768px) {
    overflow: auto;
    width: 100%;
    display: flex;
  }

  background-color: ${props => props.theme.colors.light};
`;

export const Picture = styled.img`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.paddings.larger};

  > h2 {
    font-size: 2.4rem;
    font-weight: 600;

    margin-bottom: ${props => props.theme.margins.normal};
  }

  > p {
    margin-bottom: ${props => props.theme.margins.large};
  }
`;

export const InfoItem = styled.div`
  margin-bottom: ${props => props.theme.margins.large};

  > h3 {
    font-weight: 600;

    margin-bottom: ${props => props.theme.margins.normal};
  }
`;

export const Close = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  right: ${props => props.theme.paddings.normal};
  top: ${props => props.theme.paddings.normal};
`;
