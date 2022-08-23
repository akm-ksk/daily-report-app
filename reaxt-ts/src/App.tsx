import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ReportTop} from "./report/pages/ReportTop";
import {ReportDetail} from "./report/pages/ReportDetail";
import {CategoryView} from "./report/pages/CategoryView";
import {TopPage} from "./report/pages/TopPage";
import {NotFoundPage} from "./report/pages/NotFoundPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<TopPage/>}/>
                    <Route path="/report/" element={<ReportTop/>}/>
                    <Route path="/report/:id" element={<ReportDetail/>}/>
                    <Route path="/report/category/:cat" element={<CategoryView/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
