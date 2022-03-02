import { useState, useEffect } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import { Button, Input } from "@mui/material";

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
  const [addLink] = useMutation(CREATE_LINK);
  const { data, loading, error } = useQuery(CHECK_LINK);

  const onUrlChange = (event) => {
    setUrlValue(event.target.value);
  };
  const onSlugChange = (event) => {
    setSlugValue(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const addedLink = await addLink({
        variables: {
          url: urlValue,
          slug: slugValue
        }
      });
    } catch (e) {
      // Something went wrong logic
    }
  };

  return (
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
          margin: ".5rem"
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
          margin: ".5rem"
        }}
      />
      <Button variant="contained" type="submit">
        Shorten URL
      </Button>
    </form>
  );
};

export default UrlForm;
