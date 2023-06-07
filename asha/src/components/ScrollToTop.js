import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// This component will implement a feature in our React app that automatically scrolls the user back to the top of the page whenever the route changes.
// By doing the following:
// Importing the useEffect hook and the useLocation hook from the react-router-dom and react library.
// Creating a custom component that utilises the useEffect and useLocation hooks to scroll to the top of the page whenever the route changes.
// Wrapping our app's root component with the BrowserRouter component from the react-router-dom library??
// Then adding the custom component to the root component of our app.

const ScrollToTop = () => {
    // Extracts pathname property(key) from an object
    const { pathname } = useLocation();
  
    // Automatically scrolls to top whenever pathname changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
  }
  
  export default ScrollToTop;