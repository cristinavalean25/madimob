import "../index.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useGlobalContext } from "../translations/GlobalContext";

function About() {
  const { locale, messages } = useGlobalContext();

  return (
    <>
      <Navbar />
      <div
        className="container-fluid w-100 h-100 d-flex p-3 pt-5 pb-5 justify-content-center"
        style={{
          backgroundColor: "#000",
          alignItems: "center",
        }}
      >
        <div className="container-about">
          <div className="row h-100 p-3">
            <h1 style={{ fontSize: "34px", color: "#f47521" }}>
              {messages[locale].about.title}
            </h1>

            <p className="body-text">{messages[locale].about.paragraph_1}</p>
            <p className="body-text"> {messages[locale].about.paragraph_2}</p>
            <p className="body-text"> {messages[locale].about.paragraph_3}</p>
            <p className="body-text">{messages[locale].about.paragraph_4}</p>
            <p className="body-text">{messages[locale].about.paragraph_5}</p>
            <p className="body-text">{messages[locale].about.paragraph_6}</p>
            <p className="body-text">{messages[locale].about.paragraph_7}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
