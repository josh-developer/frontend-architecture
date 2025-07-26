import './App.css'
import { useRef, useEffect } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleValueChange = (e) => {
    console.log('Custom Angular event triggered', e);
  };

  useEffect(() => {
    const current = inputRef.current;


    current?.addEventListener('valueChange', handleValueChange);

    return () => {
      current?.removeEventListener('valueChange', handleValueChange);
    };
  }, []);

  return (
    <div>
      <h1>Angular Button + Input in React</h1>

      <my-input label="Name" placeholder="Enter your name, bro!" ref={inputRef}></my-input>

      {/* <my-button label="Click Me"></my-button> */}
      <br />
      <br />
      <my-checkbox label="Checkbox"></my-checkbox>
    </div>
  );
}


export default App
