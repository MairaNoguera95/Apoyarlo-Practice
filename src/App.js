
import './App.css';
import PersonCard from './PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Doe" lastName= "Jane"/>
      <PersonCard Age= {"Age: 45"}/>
      <PersonCard hairColor= {"hair Color: Brow"}/>
      <PersonCard firstName="Smith" lastName= "John"/>
      <PersonCard Age= {"Age: 88"}/>
      <PersonCard hairColor= {"hair Color: Brow"}/>
      <PersonCard firstName="Fillmore" lastName= "Milard"/>
      <PersonCard Age= {"Age: 50"}/>
      <PersonCard hairColor= {"hair Color: Brow"}/>
      <PersonCard firstName="Smith" lastName= "Maria"/>
      <PersonCard Age= {"Age: 62"}/>
      <PersonCard hairColor= {"hair Color: Brow"}/>
    
    </div>
  );
}

export default App;
