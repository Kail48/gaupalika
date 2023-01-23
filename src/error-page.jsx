import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
 return (
    <div id="error-page" className="container mt-6 pt-6">
      <h1 class="title has-text-centered has-text-danger">Oops!</h1>
      <h2 class="subtitle has-text-centered">The Url You provided is wrong</h2>
      <p  class="subtitle has-text-centered">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
};