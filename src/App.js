import React from "react";
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./resources/styles/App.css";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import TextFieldsIcon from '@material-ui/icons/TextFields';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  speedDial: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const actions = [
  { icon: (<Link to="/moodChecksForm"><FavoriteIcon /></Link>), name: "Emotions" },
  { icon: (<Link to="/journalEntryForm"><TextFieldsIcon /></Link>), name: "Journal" },
  { icon: (<Link to="/voiceEntryForm"><VoicemailIcon /></Link>), name: "Recording" }
];

function App() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={"./resources/graph.png"} className="Graph" alt="graph"></img>
      </header>
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleClose}
          />
        ))}
      </SpeedDial>
    </div>
  );
}

export default App;
