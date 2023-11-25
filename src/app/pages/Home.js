import { ArticlesTable } from "../components";
import { useGetArticlesQuery } from "../store/api";

function Home() {
  const { data, isFetching } = useGetArticlesQuery();
  console.log("data: ", data);

  if (isFetching) return "Loading...";

  return (
    <>
      <ArticlesTable rows={data?.articles} />
    </>
  );
}

export default Home;
