import React from "react";
import Box from "../sharedComponents/Box";
import Shorten from "./Shorten";

const Body = () => {
  return (
    <Box body={true}>
      <Shorten />
    </Box>
  );
};

export default Body;
