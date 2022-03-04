import React from 'react';
import './App.css';

function App() {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/ping');
      const data = await response.json();
      console.log(data);
      
      setData(data.message);
      console.log(data);
      return;
    }

    fetchData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
