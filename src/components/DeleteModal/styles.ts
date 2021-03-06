import styled from 'styled-components';

export const Container = styled.article`
  position: relative;

  width: 100%;
  max-width: 592px;

  display: flex;
  flex-direction: column;

  padding: ${props => props.theme.paddings.larger};

  background-color: ${props => props.theme.colors.light};

  > h2 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: ${props => props.theme.margins.normal};
  }

  > p {
    margin-bottom: ${props => props.theme.margins.larger};
  }

  > section {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-start;

    > button + button {
      margin-right: ${props => props.theme.margins.large};
    }
  }

  @media (max-width: 626px) {
    align-items: center;
    text-align: center;

    > section {
      display: flex;
      justify-content: center;
    }
  }

  @media (max-width: 450px) {
    align-items: center;
    text-align: center;

    > section {
      display: block;

      > button {
        width: 100%;
      }

      > button + button {
        margin-left: 0;
        margin-top: ${props => props.theme.margins.large};
      }
    }
  }
`;

export const Loading = styled.span`
  position: absolute;
  right: ${props => props.theme.paddings.normal};
  top: ${props => props.theme.paddings.normal};
`;
