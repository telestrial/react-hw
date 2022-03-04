import { useQuery, gql } from "@apollo/client";

import { Container } from "@mui/material";

import LinkedListItem from "./LinkListItem";

import { ALL_LINKS } from "../queries";

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
