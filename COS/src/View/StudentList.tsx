import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

function StudentList(props : any) {
    return (
        <List sx={{height: "95%", overflow: 'auto'}}>
            {props.Members.map((id : any) => (
              <ListItem key={id}>
                <ListItemText>{id}</ListItemText>
              </ListItem>
            ))}
          </List>
    )
}

export default StudentList;