import './App.css';
import SectionFour from './Components/SectionFour';
import SectionOne from './Components/SectionOne';
import SectionThree from './Components/SectionThree';
import SectionTwo from './Components/SectionTwo';

function App() {
  return (
    <div className="App">
      <SectionOne/>
     <div className="flex">
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
     </div>
    </div>
  );
}

export default App;
