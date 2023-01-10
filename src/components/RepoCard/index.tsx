import React from 'react';
import { Link } from 'react-router-dom';

import {  } from 'react-router-dom';

import { Container, Topside, RepoIcon, Botside, StarIcon, ForkIcon } from './styles'

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username, 
  reponame, 
  description, 
  language, 
  stars, 
  forks, 
}) => {
  const languageClass = language ? language.toLowerCase() : 'other'// se a linguagen do repositorio for existente eu vou passa o nome da linguagen em tolowercase ai no css vou poder escolher a cor 

  return (
    <Container>
      <Topside>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link> 
        </header>
        <p>{description}</p>
      </Topside>
      
      <Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </Botside>
    </Container>
  );
}

// <Link to={`/${username}/${reponame}`}>{}</Link> vai ter um link para quando a pessoa for jogada vai pra o nome da pessoa depois para o repositorio

export default RepoCard;