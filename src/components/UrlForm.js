import { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import { Box, Button, Input } from "@mui/material";

const CREATE_LINK = gql`
  mutation($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

const CHECK_LINK = gql`
  query($slug: String!) {
    link(slug: $slug) {
      url
    }
  }
`;

const UrlForm = () => {
  const [urlValue, setUrlValue] = useState("");
  const [slugValue, setSlugValue] = useState("");
  const [slugInUse, setSlugInUse] = useState(false);

  const [addLink, { data: mutationData }] = useMutation(CREATE_LINK);
  const { data: queryData } = useQuery(CHECK_LINK, {
    variables: { slug: slugValue }
  });

  const onUrlChange = (event) => {
    setUrlValue(event.target.value);
  };
  const onSlugChange = (event) => {
    setSlugValue(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setSlugInUse(false);

    try {
      const freeLink = queryData;
      console.log(freeLink);
      if (freeLink.link === null) {
        const addedLink = await addLink({
          variables: {
            url: urlValue,
            slug: slugValue
          }
        });
        console.log(addedLink);
      } else {
        setSlugInUse(true);
      }
    } catch (e) {
      // Something went wrong logic
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <form onSubmit={onSubmitHandler}>
        <Input
          onChange={onUrlChange}
          value={urlValue}
          id="url"
          aria-describedby="url to shorten"
          placeholder="Make your links shorter"
          sx={{
            backgroundColor: "white",
            padding: ".2rem 1rem",
            borderRadius: "5px",
            margin: { xs: ".2rem", md: ".5rem" },
            width: { xs: "100%", md: "30%" }
          }}
          required
        />
        <Input
          onChange={onSlugChange}
          value={slugValue}
          id="slug"
          aria-describedby="slug"
          placeholder="Custom Slug (Optional)"
          sx={{
            backgroundColor: "white",
            padding: ".2rem 1rem",
            borderRadius: "5px",
            margin: { xs: ".2rem", md: "1rem" },
            width: { xs: "100%", md: "30%" }
          }}
          error={slugInUse}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ margin: { xs: ".2rem", md: "1rem" } }}
        >
          Shorten URL
        </Button>
        {slugInUse && (
          <Box
            sx={{
              margin: ".2rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              sx={{
                backgroundColor: "white",
                padding: ".2rem 1rem",
                borderRadius: "3px"
              }}
            >
              That slug is in use. Try something else!
            </Box>
          </Box>
        )}
      </form>
    </Box>
  );
};

export default UrlForm;
