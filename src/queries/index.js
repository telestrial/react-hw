import { gql } from "@apollo/client";

export const CREATE_LINK = gql`
  mutation($url: String!, $slug: String!) {
    createLink(url: $url, slug: $slug) {
      url
      slug
    }
  }
`;

export const CHECK_LINK = gql`
  query($slug: String!) {
    link(slug: $slug) {
      url
    }
  }
`;

export const ALL_LINKS = gql`
  query allLinks {
    allLinks {
      url
      slug
    }
  }
`;
