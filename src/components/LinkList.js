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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

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
    </Container>
  );
};

export default LinkList;
