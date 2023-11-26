import { TextField } from "@mui/material";

function SearchField({ id, label, onChange }) {
  return <TextField id={id} name={id} placeholder={label} onChange={onChange}  />;
}

export { SearchField };
