import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; //Navigate, 
import { ThemeName } from '../../styles/themes';

import { Container, GithubLogo, SearchForm } from './styles'
;

interface Props {
  themeName:  ThemeName;
  setThemeName: (newName: ThemeName) => void;
}

const Header: React.FC<Props> = ({ themeName, setThemeName}) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate('/' + search.toLocaleLowerCase().trim());
  }

  function toggleTheme() {
    setThemeName(themeName === 'light' ? 'dark': 'light') // vou mudar o nome do tema se o nome do tema ja for light eu vou troca pra dark se nao ei vou troca pra light

  }

  return (
    <Container>
      <GithubLogo onClick={toggleTheme}/>
      <SearchForm onSubmit={handleSubmit}>
        <input 
        placeholder='Enter Username or Repo ...' 
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
}

export default Header;