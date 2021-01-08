import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { Filter } from "@material-ui/icons";

const App = () => {
  const [addItem, setAdddItem] = useState([]);

  const addNote = (note) => {
    // alert("I am Clicked");
    setAdddItem((prevData) => {
      return [...prevData, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAdddItem((olddata) =>
      olddata.filter((currdata, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <Header />
      <CreateNote passNote={addNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}

      <Footer />
    </>
  );
};

export default App;
