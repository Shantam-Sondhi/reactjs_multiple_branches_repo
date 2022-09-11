import ReactDOM from 'react-dom';
import LandingPageApp from './Landing/main';

import { useRouter } from "next/router";


const Home = () => {
  const route = useRouter();
  return <div>
    <LandingPageApp />
  </div>;
}

export default Home;