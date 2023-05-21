import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Desktop2 from "./pages/Desktop2";
import Desktop from "./pages/Desktop";
import Desktop1 from "./pages/Desktop1";
import Desktop3 from "./pages/Desktop3";
import Desktop4 from "./pages/Desktop4";
import Desktop5 from "./pages/Desktop5";
import Desktop6 from "./pages/Desktop6";
import Desktop7 from "./pages/Desktop7";
import Desktop8 from "./pages/Desktop8";
import Desktop7b from "./pages/Desktop7b";
import Desktop6b from "./pages/Desktop6b";
import Desktop5b from "./pages/Desktop5b";
import Desktop4b from "./pages/Desktop4b";
import Desktop3b from "./pages/Desktop3b";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/desktop7a":
        title = "";
        metaDescription = "";
        break;
      case "/desktop6a":
        title = "";
        metaDescription = "";
        break;
      case "/desktop4a":
        title = "";
        metaDescription = "";
        break;
      case "/desktop3a":
        title = "";
        metaDescription = "";
        break;
      case "/desktop2":
        title = "";
        metaDescription = "";
        break;
      case "/desktop1":
        title = "";
        metaDescription = "";
        break;
      case "/desktop":
        title = "";
        metaDescription = "";
        break;
      case "/desktop3":
        title = "";
        metaDescription = "";
        break;
      case "/desktop7b":
        title = "";
        metaDescription = "";
        break;
      case "/desktop6b":
        title = "";
        metaDescription = "";
        break;
      case "/desktop5b":
        title = "";
        metaDescription = "";
        break;
      case "/desktop4b":
        title = "";
        metaDescription = "";
        break;
      case "/desktop3b":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Desktop2 />} />
      <Route path="/desktop7a" element={<Desktop />} />
      <Route path="/desktop6a" element={<Desktop1 />} />
      <Route path="/desktop4a" element={<Desktop3 />} />
      <Route path="/desktop3a" element={<Desktop4 />} />
      <Route path="/desktop2" element={<Desktop5 />} />
      <Route path="/desktop1" element={<Desktop6 />} />
      <Route path="/desktop" element={<Desktop7 />} />
      <Route path="/desktop3" element={<Desktop8 />} />
      <Route path="/desktop7b" element={<Desktop7b />} />
      <Route path="/desktop6b" element={<Desktop6b />} />
      <Route path="/desktop5b" element={<Desktop5b />} />
      <Route path="/desktop4b" element={<Desktop4b />} />
      <Route path="/desktop3b" element={<Desktop3b />} />
    </Routes>
  );
}
export default App;
