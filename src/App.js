import logo from './logo.svg';
import ReactGallery from 'reactive-blueimp-gallery';
import './App.css';

let retro_computers = require('./retro-computers.json');
let retro_computers_images = retro_computers.map(url => {return {source: url};});

const images = [{
  source: 'assets/banana.jpg',
}, {
  source: 'assets/banana.jpg',
}, {
  source: 'assets/banana.jpg',
}];

const options = {
  startSlideshow: true,
  slideshowInterval: 2000,
  continuous: true,
  carousel: true,
};

function App() {
  return (
    <div className="App">
      <ReactGallery 
        source={retro_computers_images} 
        options={options} />
    </div>
  );
}

export default App;
