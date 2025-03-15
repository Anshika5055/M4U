import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log("abc" + err);
  return (
    <div>
      <h1>{}</h1>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
    </div>
  );
};
export default Error;
