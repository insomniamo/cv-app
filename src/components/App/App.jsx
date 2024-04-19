import React from "react";

import Header from "@components/Header/Header.jsx";
import Content from "@components/Content/Content.jsx";
import Footer from "@components/Footer/Footer.jsx";

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
  }
}

export default App;
