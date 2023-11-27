import { ArticlesTable, SearchField, SelectField } from "../components";
import { useGetArticlesQuery } from "../store/api";
import { useState } from "react";
import { countriesConstants, categoriesConstants } from "../utils/";
import Box from "@mui/material/Box";
import debounce from "debounce";
import { Button, Typography } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

function HomeContainer() {
  const [values, setValues] = useState({
    search: "Apple",
  });
  const { data, isFetching } = useGetArticlesQuery(values);
  const [showFilters, setShowFilters] = useState(false);

  function onChange(event) {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleShowFilters() {
    if (showFilters) {
      setValues((prev) => ({ search: prev.search }));
    }

    setShowFilters((prev) => !prev);
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
        <Box sx={{ display: "flex", gap: 2 }}>
          <SearchField
            id="search"
            label="Search article"
            onChange={debounce(onChange, 500)}
          />
          <Button
            startIcon={<FilterAltIcon />}
            variant="contained"
            onClick={handleShowFilters}
          >
            Filters
          </Button>
        </Box>
      </Box>
      {showFilters ? (
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
      ) : null}
      <ArticlesTable rows={data?.articles} isLoading={isFetching} />
    </Box>
  );
}

export { HomeContainer };
