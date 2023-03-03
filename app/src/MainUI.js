import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function MainUI({
  title,
  changeTitleHandler,
  subtitle,
  changeSubtitleHandler,
  description,
  changeDescriptionHandler,
  contents,
  changeContentsHandler,
}) {
  const addButtonHandler = () => {
    if (title === "" || subtitle === "" || description === "") {
      alert("You must fill in each field.");
      return;
    }
    changeContentsHandler();

  };

  const isOpen = contents.length === 0;
  const disp = isOpen ? 'none': 'inline';
  return (
    <Grid container>
      <Grid item xs={12} mt={2}>
        <Typography
          variant="h3"
          align="center"
          letterSpacing={15}
          color="white"
        >
          TIMILINE APPLICATION
        </Typography>
      </Grid>

      <Grid item xs={12} mt={2}>
        <Grid container>
          <Grid
            item
            xs={12}
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Title"
              variant="outlined"
              sx={{ width: "50%" }}
              value={title}
              onChange={changeTitleHandler}
            />
          </Grid>
          <Grid
            item
            xs={12}
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Subtitle"
              variant="outlined"
              sx={{ width: "50%" }}
              value={subtitle}
              onChange={changeSubtitleHandler}
            />
          </Grid>

          <Grid
            item
            xs={12}
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              label="Description"
              variant="outlined"
              multiline
              sx={{ width: "50%" }}
              value={description}
              onChange={changeDescriptionHandler}
            />
          </Grid>

          <Grid
            item
            xs={12}
            mt={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button variant="contained" onClick={addButtonHandler}>
              ADD
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} mt={2} display = {disp} >
        <VerticalTimeline animate={ true }>
          {contents.map((content, index) => {
            return (
              <VerticalTimelineElement key={index} date={content.newDate}>
                <h3 className="vertical-timeline-element-title">
                  {content.newTitle}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {content.newSubtitle}
                </h5>
                <p id="description">{content.newDescription}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </Grid>
    </Grid>
  );
}

export default MainUI;