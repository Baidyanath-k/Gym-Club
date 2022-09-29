import './App.css';
import Container from './components/Container/Container';
import Headers from './components/Headers/Headers';
import Question from './components/Question/Question';

function App() {
  return (
    <div className='main-body'>
      <Headers></Headers>
      <Container></Container>
      <Question></Question>
    </div>
  );
}

export default App;
