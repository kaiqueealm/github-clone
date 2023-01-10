import styled from 'styled-components';
import { RiBookLine } from 'react-icons/ri'

export const Container = styled.div`
 --horizontalPadding: 16px;
 --verticalPadding: 24px ;

 padding: var(--verticalPadding) var(--horizontalPadding); //espaçamento entre toda a parte do header
 overflow:  hidden;

`;


export const Main = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px){
    flex-direction: row;
  }
`;

export const Leftside = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Rightside = styled.div`
  padding: 0 var(--horizontalPadding);

  @media (min-width: 768px) {
  width: 75%;
}
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  >h2{
    font-size: 16px;
    font-weight: normal;

  }
  >div{
    margin-top: 8px;
    display: grid; 
    grid-gap: 16px;  // distancia entre os repositorios

    grid-template-columns: 1fr;

    @media (min-width: 768px){// para criar duas colunas em deskytop
      grid-template-columns: 1fr 1fr ;
      grid-auto-rows: minmax(min-content, max-content);// desktop para quando a coluna do lado aumenta o tamanho a outra tambem aumentar
    }
  }
`;

export const CaledarHeading = styled.span `
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex; //no caso elemento pode receber margen se ele fosse somente blok nao receberia

`;

export const RepoIcon  = styled(RiBookLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;

`;

export const Tab = styled.div`
  background: var(--primary);

  .content{
    display: flex; 
    align-items: center;  // centralizar o item de forma vertical
    width: min-content; // para consumir o menor espaço possivel
    padding: 14px 14px; // pra cima e para baixo

    border-bottom: 2px solid var(--orange); // cria um efeito na linha na cor laranja

    .label{
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;

    }

    .number{
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px; //circulo no numero de repositorios
      border-radius: 24px;

    }

  }
  .line{
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile{
    margin-top: var(--verticalPadding);

    .content{
      margin: 0 auto;  //que o conteudo interno dela vai ser cntralizado horizontal por isso colocar auto
    }

    @media (min-width: 780px){
      display: none;
    }
  }

  &.desktop{
    display: none;

    @media (min-width: 768px){
      display: unset; //unset como se agente nao tivesse mechido em nada

      .wrapper{
        display: flex;
        margin: 0 auto;
        max-width: 1280px;

      }
      .offset{
        width:25%;// o offset vai jogar ela 25 % para adireita
        margin-right: var(--horizontalPadding);//pra ficar alinhado com os outro 
      }
    }
  }

`;

/*import styled from 'styled-components';
iport { RiBookMarkLine } from 'react-icons/ri'

export const Container = styled.div`
    --horizontalPadding: 16px;
  --verticalPadding: 24px;

  padding: var(--verticalPadding) var(--horizontalPadding); //para criar um espaçamento entre o reder e aparte esquerda da tela
  overflow: hidden;// para nao ficar saindo para fora da tela

`;

export const Main  = styled.div`
  display: flex;
  flex-direction: column;

  margin: 0 auto;
  max-width: 1280px;

  @media (min-width: 768px){
    flex-direction: row;
    // a partir do momento que alguem esta no computador para ele consumir todo espaço dele jogando mais pro lado da tela
  }

`;
export const LeftSide = styled.div`
  padding: 0 var(--horizontalPadding); //para corrigir o tamanho do avatar

  @media (min-width: 768px){ //quando chegar em 768 pix vai mudar para desktop
    width: 25%;
  }//  aparti do momento que esta no computador vou ter uma largura de 25%

 
  
`;
export const RightSide = styled.div`
  padding: 0 var(--horizontalPadding); //para corrigir o tamanho do avatar

   @media (min-width: 768px){
    width: 75%;
  }
`;

export const Repos = styled.div`
  margin-top: var(--verticalPadding);

  >h2{
    font-size: 16px;
    font-weight: normal;
  }
  >div{
    margin-top: 8px;

    display: grid;
    grid-gap: 16px; // e a distancia entre cada repositorio

    grid-template-columns: 1fr;

    @media (min-width: 768px){ //mudando para descktop para quando for acima de 7
      grid-template-columns: 1fr 1fr; //para deixar em coluna na versão desktop
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex; //mudar de block para inline-flex

`;

export const RepoIcon = styled(RiBookMarkLine)`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`;

export const Tab = styled.div`
  background: var(--primary);

  .content {
    display: flex;
    align-items: center;
    width: min-content;

    padding: 14px 16px;

    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }

    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;

    }
  }

  .line{//estilização das linhas 
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile{//irei afetar apenas o mobile
    margin-top: var(--verticalPadding);

    .content{
      margin: 0 auto; //que vai centralizar horizontalmente
    } 

    @media (min-width: 768px){
      display: none;

    }
    &.desktop{
      display: none;

      @media (min-width: 768px){ //pra aparecer so em desktop
        display: unset;//unset como se agente nao tivesse mechido em nada

        .wrapper{
          display: flex;
          margin: 0 auto;
          max-width: 1280px;
        }

        .offset{
          width: 25%;
          margin-right: var(--horizontalPadding);
        }
      }
    }
  } */