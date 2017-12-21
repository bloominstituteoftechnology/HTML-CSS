import styled, { css } from 'styled-components';
import media from '../theme/media';

export const Div = styled.div`
  ${({ marginBottom }) => marginBottom && css`
    margin-bottom: ${marginBottom};
  `};
  ${({ marginTop }) => marginTop && css`
    margin-top: ${marginTop};
  `};
  ${({ marginRight }) => marginRight && css`
    margin-right: ${marginRight};
  `};
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
  `};
`;

export const Container = styled(Div)`
  padding: 3rem 10rem 0 10rem;
  ${media.tablet`
    padding: 15px 30px 0 30px; 
  `}
  ${media.phone`
    padding: 15px 10px 0 10px; 
  `}
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled.div`
  display: flex;
  
  ${({ justify }) => justify && css`
    justify-content: ${justify};
  `};

  ${({ align }) => align && css`
    align-content: ${align};
  `};

  ${({ column }) => column && css`
    flex-direction: column;
  `};
`;