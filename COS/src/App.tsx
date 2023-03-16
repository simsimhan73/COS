import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";

import { Button, ButtonBase, Grid, List, ListItem, ListItemText, TextField } from "@mui/material"

import "./App.css";
import StudentList from "./View/StudentList";

function App() {
  const [Members, setMembers] = useState([]);
  const [width, setWidth] = useState(0);
  const [name, setName] = useState("");

  useEffect(function() {
    document.addEventListener('keypress', (event) => {
      if(event.code == 'Enter')
        document.getElementById("AddBtn")?.click;
    })
  }, [])


  function changeWidth(event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if(event.currentTarget.value)
      setWidth(parseInt(event.currentTarget.value));
  }

  function add_btn() {
    var array : any[];
    
    if(Members)
      array = Members;
    else
      array = [];

    if(name)
      array.push(name);

    setMembers(array as never[]);
  }

  function onNameChanged(event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    if(event.currentTarget.value)
      setName(event.currentTarget.value);
  }

  return (
    <Grid container className="container" direction="row">
      <Grid container xs={3} direction="column">
        <Grid container xs={3} style={{maxWidth: "100%"}} alignItems="center" justifyContent="center" >
          <TextField style={{width: "60%"}} label="가로" onChange={(e) => {changeWidth(e)}}></TextField>
        </Grid>
        <Grid xs={9} style={{maxWidth: "200px"}} border="black solid 1px">
          <StudentList Members={Members}></StudentList>
        </Grid>
      </Grid>
      <Grid container xs={9} direction="column" flexDirection="column">
        <Grid container xs={3} style={{maxWidth: "100%"}} border="black solid 1px" alignItems="center" justifyContent="center">
          <TextField label="이름" id="MemberName" onChange={(e)=> {onNameChanged(e)} }></TextField>
          <Button id="AddBtn" onClick={() => {add_btn()}}>추가</Button>
          <Button >실행</Button>
        </Grid>
        <Grid xs={9} style={{maxWidth: "100%"}}>
          
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
