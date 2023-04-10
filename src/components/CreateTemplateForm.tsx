import React, { useState } from "react";
import { createDiscreteTemplate, createRunnableTemplate } from "../create";
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { TrackedTemplate } from "../types";

export interface CreateTemplateFormProps {
  onSubmit: () => void;
}

export const CreateTemplateForm = ({ onSubmit }: CreateTemplateFormProps) => {
  const [label, setLabel] = useState("");
  const [points, setPoints] = useState(0);
  const [rate, setRate] = useState(0);
  const [templateType, setTemplateType] =
    useState<TrackedTemplate["type"]>("discrete");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (label === "" || points === 0) {
      alert("Please provide a label and points must not be 0.");
      return;
    }
    if (templateType === "discrete") {
      createDiscreteTemplate(label, points);
    } else {
      createRunnableTemplate(label, rate);
    }
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack direction="column">
        <h1>Create new template</h1>
        <TextField
          label="Template Label"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
        <RadioGroup
          value={templateType}
          onChange={(e) =>
            setTemplateType(e.target.value as "discrete" | "runnable")
          }
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormControlLabel
            value="discrete"
            control={<Radio />}
            label="Discrete"
          />
          <FormControlLabel
            value="runnable"
            control={<Radio />}
            label="Runnable"
          />
        </RadioGroup>
        {templateType === "discrete" ? (
          <TextField
            label="Points"
            type="number"
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
          />
        ) : (
          <TextField
            label="Points per minute"
            type="number"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
          />
        )}
        <Button type="submit">Create Template</Button>
      </Stack>
    </form>
  );
};
