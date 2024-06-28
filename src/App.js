import './App.css'
import LeftMenu from './Components/LeftMenu'
import RightMenu from './Components/RightMenu'
import MainContainer from './Components/MainContainer'


function App() {
  return (
    <div className='app'>
    <LeftMenu />
    <MainContainer />
    <RightMenu />

    <div className='background'></div>
    </div>
  );
}

export default App;
