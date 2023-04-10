import { Typography } from "@mui/material";
import React from "react";

export const Points = ({ points }: { points: number }) => {
  return (
    <Typography variant="h1" color="success">
      {points}
    </Typography>
  );
};

export default Points;
