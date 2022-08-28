/** @jsxImportSource @emotion/react */
import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ReportTop} from "./report/pages/ReportTop";
import {ReportDetail} from "./report/pages/ReportDetail";
import {CategoryView} from "./report/pages/CategoryView";
import {TopPage} from "./report/pages/TopPage";
import {NotFoundPage} from "./report/pages/NotFoundPage";
import {Header} from "./report/components/Header";
import {Footer} from "./report/components/Footer";
import {css} from "@emotion/react";

function App() {
    return (
        <body className="App" css={bodyStyle}>
            <BrowserRouter>
                <Header/>
                <main css={mainStyle}>
                    <div css={mainContent}>
                        <Routes>
                            <Route path="/" element={<TopPage/>}/>
                            <Route path="/report/" element={<ReportTop/>}/>
                            <Route path="/report/:id" element={<ReportDetail/>}/>
                            <Route path="/report/category/:category" element={<CategoryView/>}/>
                            <Route path="*" element={<NotFoundPage/>}/>
                        </Routes>
                    </div>
                </main>
                <Footer/>
            </BrowserRouter>
        </body>
    );
}

export default App;

const bodyStyle = css({
    backgroundColor: '#edf2f7',
})

const mainStyle = css({
    margin: '0 auto',
    padding: '64px 0 0',
    maxWidth: '980px',
    minHeight: 'calc(100vh - 52px)',
})

const mainContent = css({
    padding: '120px 0 80px',
})
