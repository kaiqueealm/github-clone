import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'


export const Container = styled.div`
  display: flex;
  flex-direction: column; // versao celular colun que por padrao agente que que fique em coluna
  justify-content: space-between; // vai separa a topside da botside o maximo possivel 
  padding: 16px; 
  border: 1px solid var(--border); // uma borda bem fina
  border-radius: 6px;

`;

export const Topside = styled.div`
  > header{
    display: flex;
    align-items: center;

    > a { // a e como se fosse o link
      margin-left: 8px; //para separa o icone do link
      font-size: 14px;
      font-weight: 600;
      color: var(--link);


      text-decoration: none; //para tirar o underline a barra que fica abaixo

      &:focus, &:hover{
        text-decoration: underline;
  }
    
  }  // esse header e o  que contem um link pro repositorio


}

> p {
      margin: 8px 0 16px;
      font-size: 12px;
      color: var(--gray);
      letter-spacing: 0.1px;
    }
`;


const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
` // a estilização ja vai estar pronta

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;
export const Botside = styled.div`
  >ul{
    display: flex;  // qaundo vc troca display block pra flex ele troca de formsto de coluna para linha
    align-items: center;

    >li{
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px; //pro texto se separar do icone
        font-size: 12px;
        color: var(--gray);

      }
    }
  }

  .language{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;

    &.other{
      background: var(--other-language);
      // quando fro uma liguagen que agente nao conhece agente coloca com uma cor diferente
    }

    &.javascript{
      background: var(--javascript);
    }

    &.typescript{
      background: var(--typescript);

    }
  }
`;
export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
