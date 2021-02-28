import { useQuery } from "@apollo/client";
import { query } from "./query";
import "./App.css";

function App() {
  const { loading, error, data } = useQuery(query);
  if (loading) return <p>Loading ...</p>;
  const page = data.pageCollection.items[0];

  // render the fetched Contentful data
  return (
    <div className="App">
      <header className="App-header">
        <img src={page?.logo?.url} className="App-logo" alt="logo" />
        <p>{page?.title}</p>
      </header>
    </div>
  );
}

export default App;
