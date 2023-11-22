import { useState } from "react";
import { useGlobalContext } from "../translations/GlobalContext";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Fqa() {
  const { locale, messages } = useGlobalContext();
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  const handleQuestionClick = (questionKey: string) => {
    setSelectedQuestion(selectedQuestion === questionKey ? null : questionKey);
  };

  return (
    <>
      <Navbar />
      <div
        className="container-fluid w-100 vh-100 d-flex p-3 pt-5  justify-content-center"
        style={{
          backgroundColor: "#000",
          color: "#fff",
          zIndex: 100,
        }}
      >
        <div className="container-faq">
          <div
            className="row  p-3"
            style={{ minHeight: "calc(100vh - 100px)" }}
          >
            <h2
              style={{
                textAlign: "center",
                padding: 10,
                fontWeight: 700,
                color: "#f47521",
              }}
            >
              {messages[locale].FQA.title}
            </h2>

            {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
              const questionKey = `question_${i}`;
              const answerKey = `${questionKey}_answer`;

              if (
                messages[locale].FQA[questionKey] &&
                messages[locale].FQA[answerKey]
              ) {
                const isQuestionSelected = selectedQuestion === questionKey;

                return (
                  <div
                    key={questionKey}
                    style={{ marginBottom: 10, color: "#fff" }}
                  >
                    <div
                      style={{
                        cursor: "pointer",
                        fontWeight: isQuestionSelected ? "bold" : "normal",
                        fontSize: 21,
                        marginBottom: "1%",
                      }}
                      onClick={() => handleQuestionClick(questionKey)}
                    >
                      {messages[locale].FQA[questionKey]}
                    </div>

                    {isQuestionSelected && (
                      <div
                        style={{
                          marginLeft: 20,
                          color: "#ddd",
                          maxHeight: "300px",
                          overflowY: "auto",
                        }}
                      >
                        {messages[locale].FQA[answerKey].map(
                          (answer: string, index: number) => (
                            <p key={index}>{answer}</p>
                          )
                        )}
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Fqa;
