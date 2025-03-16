import { useRouteError } from "react-router";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2 className="oops"> Oops! Something went wrong</h2>
      <h1 className="oops1">
        {err.status}:{err.statusText}
      </h1>
    </div>
  );
};
export default Error;
