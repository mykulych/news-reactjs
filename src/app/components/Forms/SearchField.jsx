import { TextField } from "@mui/material";

function SearchField({ label, onChange }) {
  return <TextField label={label} onChange={onChange}  />;
}

export { SearchField };
