import logo from './logo.svg';
import ReactGallery from 'reactive-blueimp-gallery';
import './App.css';

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
        source={images} 
        options={options} />
    </div>
  );
}

export default App;
