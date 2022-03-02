import { useQuery, gql } from "@apollo/client";

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
    <div>
      {data &&
        data.allLinks.map((link) => {
          return (
            <div>
              {link.url}, {link.slug}
            </div>
          );
        })}
    </div>
  );
};

export default LinkList;
