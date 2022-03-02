import { Container } from "@mui/material";

import Header from "./components/Header";
import Landing from "./components/Landing";
import UrlFormSection from "./components/UrlFormSection";
import UrlForm from "./components/UrlForm";
import LinkList from "./components/LinkList";

const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Landing />
      </Container>
      <UrlFormSection>
        <UrlForm />
      </UrlFormSection>
      <LinkList />
    </>
  );
};

export default App;
