import logo from './logo.svg';
import './App.scss';
import { Main_container } from './component/Main_container';
import { Header } from './component/Header';
import { Footer } from './component/Footer';

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Main_container />
      <Footer/>
    </div>

  );
}

export default App;
