import { useRouteError } from "react-router-dom";
import './components/stylesheets/Error.css'
import Navbar from './components/Nav.jsx'
import Footer from './components/Footer.jsx'

import {
  Link,
  NavLink,
} from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Navbar />

      {/* content of error page */}
      <div id="error-page">
        <h1>Oops! Page {error.statusText}</h1>
        <br />
        <p>
          <i>Description : {error.statusText || error.message}</i>
        </p>
        <p>Sorry, an unexpected error has occurred.</p>
        <br />
        <br />
        <div  >

          <Link id="BackToHome" to="/">Back to Home Page</Link>
        </div>
      </div>
      {/* content of error pages ends here */}
      <Footer />
    </>

  );
}