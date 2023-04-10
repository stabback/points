import * as React from "react";
import Container from "@mui/material/Container";
import Points from "./components/Points";
import { useStore } from "./use-store";
import { getScoreForDay } from "./get-score-for-day";
import { CreateTemplateForm } from "./components/CreateTemplateForm";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

export default function App() {
  const store = useStore();
  const [open, setOpen] = React.useState(false);

  const pointsForToday = getScoreForDay(store.items, new Date());

  return (
    <Container maxWidth="sm">
      <Points points={pointsForToday} />
      <Button onClick={() => setOpen(true)}>New Template</Button>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <Box p={1}>
          <CreateTemplateForm onSubmit={() => setOpen(false)} />
        </Box>
      </Drawer>
    </Container>
  );
}
