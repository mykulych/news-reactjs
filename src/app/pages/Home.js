import { useForm } from "react-hook-form";
import { ArticlesTable, SearchField } from "../components";
import { useGetArticlesQuery } from "../store/api";
import debounce from "debounce";
import { useState } from "react";

function Home() {
  const [search, setSearch] = useState("");
  const { data, isFetching } = useGetArticlesQuery({ search });

  function onSearchChange(event) {
    const value = event.target.value;
    if (value) {
      setSearch(value);
    }
  }

  return (
    <>
      <SearchField
        id="search"
        label="Search article"
        onChange={debounce(onSearchChange, 500)}
      />
      <ArticlesTable rows={data?.articles} isLoading={isFetching} />
    </>
  );
}

export default Home;
