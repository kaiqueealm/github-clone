import { createGlobalStyle } from 'styled-components' //styled-components que vai posibilitar cria a função no estilo global

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } // *{} pra tirar todo o padrao que o html tem colocado no navegador

  html {
    min-height: 100%;
    background: var(--primary);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family : -apple-system,BlinkMacSystemFont,"Segoe UI","Noto Sans",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
    color: var(--black);

    transition: color .4s ease-out;
  } //por que colocar o button e input separado 
  ul{
    list-style: none; //para nao ficar com as bolinhas ao redor
  }

 :root{
  ${props => {
    const theme = props.theme;

    let append = '';
    Object.entries(theme).forEach(([prop,valeu]) => {
      append += `--${prop}: ${valeu};`;
    })
    return append;
  }}
 }


` //styled component tem que ficar dentro de crases

// crlt + shift + c no google crome para abri um aba styles para pesquisar as fontes 