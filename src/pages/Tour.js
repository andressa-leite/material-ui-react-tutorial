import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ImageCollage from "../components/ImageCollage";
import Accordion from "../components/Accordion";
import Modal from "../components/Modal";

import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";

function Tour() {
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://cdn.getyourguide.com/img/location/5ffeb49109bf0.jpeg/68.jpg"
        height={325}
        />
        <ImageCollage />
      </Box>
      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam aliquam vitae, repudiandae accusantium possimus magni ut? Excepturi illo blanditiis alias ad ut tempora dicta laboriosam iste, eligendi distinctio eius in laborum voluptatum cupiditate aliquam. Soluta, magnam accusamus. Cumque, perferendis ad!
        </Typography>
      </Box>
      <Box marginBottom={10}>
          <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently Asked Questions
          </Typography>
        <Accordion />
      </Box>
      
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          // showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        ><Modal />
          {/* <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Archive" icon={<ArchiveIcon />} /> */}
        </BottomNavigation>
      </Paper>
      
    </Container>
  );
}

export default Tour;
