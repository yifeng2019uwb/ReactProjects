import logo from './logo.svg';
import './App.css';
import SearchFruit from './component/searchFruit';
import Menu from './component/Menu';
import Place from './component/Place';
import VideoPlayer from './component/VideoPlayer';

function MyButton({ title, disabled }) {
  return (
    <button disabled={disabled}> {title} </button>
  );
}

function App() {
  return  (
    <div>
      <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo react" alt="React logo" />
        </a>
      <h1>Welcome to my app</h1>

      <>
      <VideoPlayer />
      </>
     
      <MyButton title="I'm a disabled button" disabled={true}/>

      <>
      <h1></h1>
      </>

      <>
        <Place />
      </>

      <>
        <Menu />
      </>
      <SearchFruit />

    </div>
  )
}



export default App;
