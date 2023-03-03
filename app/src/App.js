import "./App.css";
import { useState, useEffect } from "react";
import MainUI from "./MainUI";

function App() {
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [contents, setContents] = useState([]);

  const [which, setwhich] = useState(0);



  useEffect(() => {
    if (which === 0) {
      if (JSON.parse(localStorage.getItem("timelinesarray")) != null) {
        setContents(JSON.parse(localStorage.getItem("timelinesarray")));
      }
      setwhich(1);
      return;
    } else {
      localStorage.setItem("timelinesarray", JSON.stringify(contents));
    }
  }, [contents]);

  const changeTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const changeSubtitleHandler = (event) => {
    setSubtitle(event.target.value);
  };
  const changeDescriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const changeContentsHandler = () => {
    const currentdate = new Date();
    const datetime =
      currentdate.getDate() +
      "/" +
      (currentdate.getMonth() + 1) +
      "/" +
      currentdate.getFullYear() +
      " @ " +
      currentdate.getHours() +
      ":" +
      currentdate.getMinutes() +
      ":" +
      currentdate.getSeconds();
    const NewElement = {
      newTitle: title,
      newSubtitle: subtitle,
      newDescription: description,
      newDate: datetime,
    };

    // setContents([...contents, NewElement]);
    setContents([NewElement, ...contents]);
  };

  return (
    <div className="App">
      <MainUI
        title={title}
        changeTitleHandler={changeTitleHandler}
        subtitle={subtitle}
        changeSubtitleHandler={changeSubtitleHandler}
        description={description}
        changeDescriptionHandler={changeDescriptionHandler}
        contents={contents}
        changeContentsHandler={changeContentsHandler}
      />
    </div>
  );
}

export default App;