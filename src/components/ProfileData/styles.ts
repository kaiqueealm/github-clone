import styled, { css } from 'styled-components';
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine  } from 'react-icons/ri'; // os icones importados de react-icons-ri 

export const Container = styled.div`

`;

export const  Flex = styled.div`
  display: flex;
  align-items: center;
  
  >div{
    margin-left: 24px;
    >h1{
      font-size: 26px;
      line-height: 1.25;
      color: var(--gray-dark);
      font-weight: 600;

    }

    > h2{
      font-size: 20px;
      color: var(--username);
      font-weight: 300;
    }
  }

  @media (min-width: 768px){
    flex-direction: column; // para virar coluna para empurra o h2 e h1 para baixo da imagen
    align-items: flex-start; //para jogar la no começo  

    > div {
      margin-left: 0; // para tira o espaçamento da div h1 e h2
      margin-top: 16px;
      
    }
  }
`;
export const  Avatar = styled.img`
  width: 16%;
  border-radius: 50%;

  @media (min-width: 768px){
    width: 100%; // para fazer qua imagem nao quebre
    margin-top: -34px;
  }



`;
export const  Row = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap; //para deixar mais flexivel quebra alinha dos folowers
  margin: 20px 0;

  >li{
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }
    >*{
      margin-right: 5px;
    }

  }
`;

const iconCSS = css`
  width:16;
  height: 16;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const  PeopleIcon = styled(RiGroupLine)`
${iconCSS}
`;
export const  Column = styled.ul`
  li{
    display: flex;
    align-items: center;
    font-size: 14px;

  }

  li + li{  
    margin-top: 10px;
  }
  span {
    margin-left: 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  }
`;
export const  CompanyIcon = styled(RiBuilding4Line)`
${iconCSS}
`;
export const  LocationIcon = styled(RiMapPin2Line)`
${iconCSS}
`;
export const  EmailIcon = styled(RiMailLine)`
${iconCSS}
`;
export const  BlogIcon = styled(RiLinksLine)`
${iconCSS}
`;

