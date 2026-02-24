import React, { useState } from "react";
import { Layout } from "../Components/Layout";
import { faqs } from "../data/faqs";
import { Description, Options } from "../styles/FAQs.styles";

function FAQs() {
  const [content, setContent] = useState(faqs[0].description);
  const [display, setDisplay] = useState(false);
  const [title, setTitle] = useState(faqs[0].title);

  const Container1 = {
    display: "flex",
    gap: "10px",
    backgroundColor: "#ffffff",
  };

  const Container2 = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#ffffff",
  };

  return (
    <Layout>
      <h1>Frequently Asked Questions</h1>
      <p>{title}</p>

      <button onClick={() => setDisplay(true)}>vertical</button>
      <button onClick={() => setDisplay(false)}>horizontal</button>
      <div style={display ? Container1 : Container2}>
        <div style={display ? Container2 : Container1}>
          {faqs.map((f) => (
            <div key={f.id}>
              <Options
                onClick={() => {
                  setContent(f.description);
                  setTitle(f.title);
                }}
              > 
                {f.title}
              </Options>
            </div>
          ))}
        </div>

        <Description>
          <p>{content}</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur quaerat inventore earum mollitia sit nam quibusdam
            voluptatibus rem modi corporis maiores vel in iure iste, nulla animi
            quam cum laudantium ea consequuntur praesentium fugiat nemo repellat
            nisi. Possimus distinctio ex et quaerat ipsa quidem dicta hic error,
            alias ab magnam laboriosam quibusdam a eveniet quos voluptas ad.
            Laudantium quisquam accusantium consequatur rerum alias quidem,
            facere error hic non odit ab laborum quibusdam dolores consequuntur
            voluptate iure id iusto illum consectetur a enim asperiores, dicta
            nemo sint. Facilis enim nulla iusto consequatur porro, eveniet
            minus. Vitae enim quasi distinctio fugit porro.
          </p>
        </Description>
      </div>
    </Layout>
  );
}

export { FAQs };
