import './App.css';
import { AppProvider } from './providers/app-provider';
import { MuiMode } from './MUI/MuiMode';
// import { Skills } from './src/Skills/skills';
// const skills = ['React js', 'React Native', 'Redux']

function App() {
  return (
    <AppProvider>
       <div className="App">
        <MuiMode/>
       </div>
    </AppProvider>
    // <div className="App">
    //   <Skills skills={skills}/>
    // </div>
  );
}

export default App;
