import { ArticlesTable, SearchField, SelectField } from "../components";
import { useGetArticlesQuery } from "../store/api";
import { useState } from "react";
import { countriesConstants, categoriesConstants } from "../utils/";
import Box from "@mui/material/Box";
import debounce from "debounce";
import { Typography } from "@mui/material";

function HomeContainer() {
  const [values, setValues] = useState({
    search: "",
    country: "",
    category: "",
  });
  const { data, isFetching } = useGetArticlesQuery(values);

  function onChange(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Formula Top Headlines</Typography>
        <SearchField
          id="search"
          label="Search article"
          onChange={debounce(onChange, 500)}
        />
      </Box>
      <Box sx={{ display: "flex", gap: 3, width: "50%" }}>
        <SelectField
          id="country"
          value={values.country}
          label="Country"
          onChange={onChange}
          options={countriesConstants}
        />
        <SelectField
          id="category"
          value={values.category}
          label="Category"
          onChange={onChange}
          options={categoriesConstants}
        />
      </Box>
      <ArticlesTable rows={data?.articles} isLoading={isFetching} />
    </Box>
  );
}

export { HomeContainer };
