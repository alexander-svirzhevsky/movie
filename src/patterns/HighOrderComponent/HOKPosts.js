import usePosts from "./usePosts";

export default function HOKPosts(Component) {
  const [error, loading, data] = usePosts();

  return (props) => {
    return <Component error={error} loading={loading} data={data} {...props} />;
  };
}
