import { Box } from "@mui/material";

function Layout({ children }) {
  return (
    <Box sx={{ width: "100%", maxWidth: "1600px", m: "0 auto" }}>
      {children}
    </Box>
  );
}

export { Layout };
