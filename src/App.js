import './App.css';
import Container from './components/Container/Container';
import Header from './components/Header/Header';
import Question from './components/Question/Question';

function App() {
  return (
    <div className='main-body'>
      <Header></Header>
      <Container></Container>
      <Question></Question>
    </div>
  );
}

export default App;
