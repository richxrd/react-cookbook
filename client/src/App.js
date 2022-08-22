import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Recipe from "./pages/Recipe";
import NewRecipe from "./pages/NewRecipe";
import Profile from "./pages/Profile";
import Collections from "./pages/Collections";

const App = () => {
    return (
        <BrowserRouter>
            <div className="font-sans">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/recipes" element={<Recipe />} />
                    <Route path="/new" element={<NewRecipe />} />
                    <Route path="/user/:uniqueId" element={<Profile />} />
                    <Route
                        path="/user/:uniqueId/collection/:collectionId"
                        element={<Collections />}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
