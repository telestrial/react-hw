import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";

import { CREATE_LINK, CHECK_LINK } from "../queries";

import { Box, Button, Input } from "@mui/material";

import CopyLink from "./CopyLink";
import UrlFormWarning from "./UrlFormWarning";

const UrlForm = () => {
  const [urlValue, setUrlValue] = useState("");
  const [slugValue, setSlugValue] = useState("");
  const [slugInUse, setSlugInUse] = useState(false);
  const [lastUrl, setLastUrl] = useState(null);
  const [serverError, setServerError] = useState(false);

  const [addLink] = useMutation(CREATE_LINK);
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

    // A better abstraction here might be a custom hook
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

        // Did the user create the slug or are we recieving it from our request?
        const newSlug = slugValue ? slugValue : addedLink.data.createLink.slug;

        // Set url to trigger display and reset the form
        setLastUrl(`https://hdwl.link/` + newSlug);
        setUrlValue("");
        setSlugValue("");
      } else {
        // Return existing slug of same name
        setSlugInUse(true);
      }
    } catch (e) {
      setServerError(true);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {/* Displaying a created link */}
        {lastUrl && <CopyLink link={lastUrl} />}
      </Box>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <form onSubmit={onSubmitHandler}>
          {/* Would be good to make these more generic, but I felt
              I'd be passing everything except style */}
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
              margin: { xs: ".2rem", md: ".5rem" },
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
          {/* Form Error handling */}
          {slugInUse && (
            <UrlFormWarning>
              That slug is in use. Try something else!
            </UrlFormWarning>
          )}
          {serverError && (
            <UrlFormWarning>
              The server is down. Please try again later!
            </UrlFormWarning>
          )}
        </form>
      </Box>
    </Box>
  );
};

export default UrlForm;
