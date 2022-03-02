import { useQuery, gql } from "@apollo/client";

import { Box, Container } from "@mui/material";

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
          return (
            <Box key={link.slug} sx={{ margin: ".3rem" }}>
              <a href={`${link.url}`}>{link.url}</a> &#8594;{" "}
              <a href={`https://hdwy.link/${link.slug}`}>
                https://hdwy.link/{link.slug}
              </a>
            </Box>
          );
        })}
    </Container>
  );
};

export default LinkList;
