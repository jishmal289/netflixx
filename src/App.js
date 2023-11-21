import './App.css';
import Row from './components/Row';
import requests from './components/requests';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Trending Movie" fetchUrl={requests.fetchTrending} />

      <Row  title="NetflixOriginals" fetchUrl={requests.fetchNetflixOriginals} />

      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />

      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />

      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />

      <Row title="Comedey Movies" fetchUrl={requests.fetchComedyMovies} />

      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      <Row title="Documentary" fetchUrl={requests.fetchNetflixOriginals} />      

      
      
    </div>
  );
}

export default App;