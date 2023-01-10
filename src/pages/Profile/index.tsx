import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'

import { Container, Main, Leftside, Rightside, Repos, CaledarHeading, RepoIcon ,Tab } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { APIUser, APIRepo } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];// precisa ser opicional 
  error?: string; 
}

const Profile: React.FC = () => {
  const { username = 'kaiqueealm' } = useParams();
  const [data, setData] = useState<Data>();
  
  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`), //pega um json e trata ele
      fetch(`https://api.github.com/users/${username}/repos`),
      //a primeira promise vai ser utlizando api da fetch
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!'})
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.50 - Math.random()) //vai ter uma chance de 50% de cada repositorio aparecer
      const slicedRepos  = shuffledRepos.slice(0, 8);

      setData({
        user,
        repos: slicedRepos,
      })
    })
  }, [username]);

  if (data ?.error){
    return <h1>{data.error}</h1>
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading ...</h1>
  }

  const TabContent = () => ( //TabContent que vai ser um elemento react 
    <div className='content'>
      <RepoIcon />
      <span className='label'>Repositorios</span>
      <span className='number'>{data?.user?.public_repos}</span>
    </div>

  )

  return (//pra resprita os padroes precisamos envolver o tabcontent com uma div wapper o span e o que vai da o emurrao para jogar ele para a direita
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <span className='offset'/>
          <TabContent />
        </div>
        

        <span className='line'/>
      </Tab>
      <Main>
        <Leftside>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.fallowers}
            following={data.user.fallowing}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
          />

        </Leftside>

        <Rightside>
          <Tab className='mobile'>
            <TabContent />
            <span className='line'/>
          </Tab>

          <Repos>
            <h2>Radom repos</h2>

            <div>
              {data.repos.map((item) =>(
                <RepoCard 
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language} //se o numero do repositorio for divisivel por 3 ai vou colocar que ele vai ser javascript se nao ele vai ser javascript vai ficar entre uma bolinha amarela ou bolinha azul
                  stars={item.starsgazers_count}
                  forks={item.forks}
                />
              ))}
            </div>
          </Repos>

          <CaledarHeading>
            Radom calendar (do not represent actual data)
          </CaledarHeading>
          
          <RandomCalendar />
        </Rightside>
      </Main>
    </Container>
  );
}

export default Profile;

/*const Profile: React.FC = () => {
  const TabContent = () => ( //TabContent que vai ser um elemento react 
    <div className='content'>
      <RepoIcon />
      <span className='label'>Repositorios</span>
      <span className='number'>16</span>
    </div>

  )

  return (//pra resprita os padroes precisamos envolver o tabcontent com uma div wapper o span e o que vai da o emurrao para jogar ele para a direita
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <span className='offset'/>
          <TabContent />
        </div>
        

        <span className='line'/>
      </Tab>
      <Main>
        <LeftSide>
          <ProfileData
            username={'Kaiqueealm'}
            name={'Kaique almeida'}
            avatarUrl={'https://avatars.githubusercontent.com/u/43797086?v=4'}
            followers={887}
            following={7}
            company={'Rocktseat'}
            location={'São Paulo, Brazil'}
            email={'kaiquee.alm@gmail.com'}
            blog={'linkedin.com/in/KaiqueAlmeidaSilva'}
          />

        </LeftSide>

        <RightSide>
          <Tab className='mobile'>
            <TabContent />
            <span className='line'/>
          </Tab>

          <Repos>
            <h2>Radom repos</h2>

            <div>
              {[1,2,3,4,5,6].map(n =>(
                <RepoCard 
                  key={n}
                  username={'Kaiqueealm'}
                  reponame={'doctocare'}
                  description={'seobre health website'}
                  language={n % 3 === 0 ? 'javascript' : 'typescript'} //se o numero do repositorio for divisivel por 3 ai vou colocar que ele vai ser javascript se nao ele vai ser javascript vai ficar entre uma bolinha amarela ou bolinha azul
                  stars={8}
                  forks={4}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>
            Radom calendar (do not represent actual data)
          </CalendarHeading>
          
          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
}

export default Profile;

/*



//<Tab className="mobile"> {/* essa tab e versao mobile */
//<TabContent />
//<span className='line'/> { /* a linha que fica embaixo de repositorio */}
//</Tab> 