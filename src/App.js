import './App.css';
import Container from './components/container';
import { ThemeProvider } from './contexts/ThemeContext';
import { CityProvider } from './contexts/stateContext';
function App() {
  return (
    <div>
      <ThemeProvider>
        <CityProvider>
          <Container></Container>
        </CityProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
