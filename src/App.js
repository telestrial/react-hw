import { Button } from "@mui/material";
import { useQuery, gql } from "@apollo/client";

const GET_USER = gql`
  query User($userId: Int = 1) {
    user(id: $userId) {
      name
      email
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_USER);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Button variant="outlined">Check</Button>
      <div>{data && `${data.user.name}, ${data.user.email}`}</div>
    </div>
  );
};

export default App;
