import { useQuery, gql } from "@apollo/client";

import { Container } from "@mui/material";

import LinkedListItem from "./LinkListItem";

const ALL_LINKS = gql`
  query allLinks {
    allLinks {
      url
      slug
    }
  }
`;

const LinkList = () => {
  const { loading, error, data } = useQuery(ALL_LINKS);

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {data &&
        data.allLinks.map((link) => {
          return <LinkedListItem key={link.slug} link={link} />;
        })}
      {loading && <p>Loading previous links...</p>}
      {error && <p>Something went wrong!</p>}
    </Container>
  );
};

export default LinkList;
