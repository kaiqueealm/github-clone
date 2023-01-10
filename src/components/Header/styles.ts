import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px; 
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  width: 32px;
  height: 32px;
  flex-shrink:0; //pra nao amassar a logo

  cursor: pointer;
  &:hover{
    opacity: 0.8;
  }

`;

export const SearchForm = styled.form`
  padding-left: 16px; //mais a direita
  width: 100%;


  input {
    background: var(--search);
    outline: 0; //pra nao ficar com a linha ao redor do input
    border-radius: 6px; // arredonda ao redor do input
    padding: 7px 12px; // 7 pra cima e baixo e 12 nos dois lados 
    width: 100%; //100% do tamanho disponivel para ele

    &:focus { //para fazer um efeito quando clicar para diminuir para 318
      width: 318px; 
    }

    transition: width .2s ease-out, color .2s; //para fazer uma animação na tela e colocar um color para depois animar a cor 
  }
`;

