import { useEffect, useState } from "react";
import "./App.css";
import Informations from "./components/informations"

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)


  async function getFetch() {
    const fetchData = await fetch('https://course-api.com/react-tours-project');
    const response = await fetchData.json();
    setData(response);
    setIsLoading(false)
  }
  useEffect(() => {
    getFetch();
  }, []);
  const handleDelete = (id) => {
    const updatedData = data.filter(item => item.id !== id);
    setData(updatedData);
  };
  if (isLoading) {
    return <div className="loader"></div>
  }
  function refresh() {
    getFetch()
  }
  return (
    <div className="container">
      {!data?.length ? <div className="emptyPage">
        <div>No Tours Selected</div>
        <button onClick={refresh}>Refresh</button>
      </div> : data.map((item) => (
        <Informations
          key={item.id}
          item={item}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;