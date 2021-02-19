import { useState, useEffect } from "react";

const query = `
{
  pageCollection {
    items {
      title
      logo {
        url
      }
    }
  }
}
`;

export function App() {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/hp65n3cv65kf/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Authenticate the request
          Authorization: "Bearer 4J0wH_kob0-C2-7MwgL5JqNJkTLtjDql0TrSJ9gFdCA",
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.pageCollection.items[0]);
      });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={page.logo.url} className="App-logo" alt="logo" />
        <p>${page.header}</p>
      </header>
    </div>
  );
}

export default App;
