import Button from './components/Button';
import CounterForTest from './components/CounterForTest';

function App() {
  return (
    <>
      <CounterForTest />
      <Button bgColor='green' action={() => {}} solid={true}></Button>
    </>
  );
}

export default App;
