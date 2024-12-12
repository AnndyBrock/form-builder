// @ts-nocheck
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import FormBuilderPage from "./pages/FormBuilder";
import GlobalStyles from "./components/GlobalStyles";
import FormsPage from "./pages/Forms.jsx";


const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/forms" element={<FormsPage />} />
                <Route path="/form-builder/:formId" element={<FormBuilderPage />} />
                <Route path="/form-builder" element={<FormBuilderPage />} />
            </Routes>
        </Router>
    );
};

export default App;
