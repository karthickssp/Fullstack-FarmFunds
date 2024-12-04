import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import LoginRegister from "./pages/LoginRegister";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Profile from "./pages/user/Profile";
import Calculator from "./pages/Calculator";
import TrackLoans from "./components/loans/TrackLoans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashBoard";
import AdminHome from "./pages/admin/AdminHome";
import { AddSchema } from "./pages/admin/AddSchema";
import SchemaForm from "./pages/admin/SchemaForm";
import Sidebar from "./components/layout/Sidebar";
import ManageLoans from "./pages/admin/ManageLoans";
import Error from "./components/others/Error";
import { selectUser } from "./components/redux/UserSlice";
import ApplyLoan from "./components/loans/ApplyLoan";
import LoanSchema from "./components/loans/LoanSchemas";
import Description from "./components/loans/Description";
import ScrollTop from "./components/others/ScrollTop";
import Setting from "./pages/user/Setting";
import Loading from "./components/others/Loading";

function App() {
  const location = useLocation();

  const isAdmin = () => {
    return location.pathname.startsWith("/admin");
  };
  const user = useSelector(selectUser);
  const isLogin = user.user && user.user.username;

  return (
    <>
      <ScrollTop />
      {!isAdmin() && <Header />}
      {isAdmin() && <Sidebar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/sign" element={<LoginRegister />} />
        <Route path="/schema" element={<LoanSchema />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/detail/:id" element={<Description />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/load" element={<Loading/>} />
        {isLogin ? (
          <>
            <Route path="/apply" element={<ApplyLoan />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/trackloans" element={<TrackLoans />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/error" />} />
        )}
        {isLogin && isAdmin ? (
          <>
            <Route path="/admin/home" element={<AdminHome />} />
            <Route path="/admin/manage" element={<ManageLoans />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/schema" element={<AddSchema />} />
            <Route path="/admin/addschema" element={<SchemaForm />} />
            <Route path="/admin/updateschema/:id" element={<SchemaForm />} />
            <Route path="/admin/setting" element={<Setting />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/error" />} />
        )}
      </Routes>
      {!isAdmin() && <Footer />}
    </>
  );
}

export default App;
