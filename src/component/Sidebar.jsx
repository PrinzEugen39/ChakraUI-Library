import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      <List color="white" fontSize="1rem" spacing={4}>
        <ListItem>
          <NavLink to="/">
            <ListIcon as={CalendarIcon} />
            Dashboard.
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/create">
            <ListIcon as={EditIcon} />
            Create.
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/profile">
            <ListIcon as={AtSignIcon} />
            Profile.
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
