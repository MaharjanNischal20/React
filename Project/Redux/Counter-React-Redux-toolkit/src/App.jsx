import { useSelector } from "react-redux";
import "./App.css";
import Container from "./components/Container";
import Controls from "./components/Controls";
import Display from "./components/Display";
import Header from "./components/Header";
import PrivacyToggle from "./components/PrivacyToggle";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Container>
        <center className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <PrivacyToggle /> : <Display />}
          </div>
          <Controls></Controls>
        </center>
      </Container>
    </>
  );
}

export default App;
