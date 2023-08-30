import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NoPage from "./pages/NoPage";
import Gallery from "./pages/gallery";
import MustVisitLocations from "./pages/MustVisitLocations";
import Community from "./pages/Community";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import AfterLogin from "./pages/afterLogin";
import AddTrip from "./pages/addtrip";
import SearchRiders from "./pages/SearchRiders";
import "./pages/titleScript";
import Services from "./pages/services";
import Garages from "./pages/garages";
import adminAfterLogin from "./pages/adminAfterLogin";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="mustvisitlocations" element={<MustVisitLocations />} />
          <Route path="community" element={<Community />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="afterlogin" element={<AfterLogin />} />
          <Route path="addtrip" element={<AddTrip />} />
          <Route path="*" element={<NoPage />} />
          <Route path="services" element={<Services />} />
          <Route path="garages" element={<Garages />} />
          <Route path="adminAfterLogin" element={<adminAfterLogin />}/>
          <Route path="searchriders" element={<SearchRiders />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);