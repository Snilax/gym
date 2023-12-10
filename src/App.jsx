import "./styles/style.scss";
import { Route, Routes } from 'react-router-dom';
import { TrainerZeroPage, trainer2, trainer3, trainer4, coachName1, coachName2, coachName3, coachName4 } from "./pages/TrainerZeroPage.jsx";
import { ClassPage, class2, class3, class4, className1, className2, className3, className4 } from "./pages/ClassPage.jsx";

import Home from './pages/Home.jsx';
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Trainers from "./components/Trainers";
import ClassesPage from "./pages/ClassesPage.jsx";
function App() {
    TrainerZeroPage();
    ClassPage();
    return (<>
        <Header></Header>
        <Routes>
            <Route
                path="/"
                element={<Home />}
            ></Route>
            <Route
                path="/Trainers"
                element={<Trainers />}
            ></Route>
            <Route
                path={`/Trainers/${coachName1}`}
                element={<TrainerZeroPage count={"0"} />}
            ></Route>
            <Route
                path={`/Trainers/${coachName2}`}
                element={
                    <div className="coach-page" id="CoachPage">
                        {trainer2}
                    </div>}
            ></Route>
            <Route
                path={`/Trainers/${coachName3}`}
                element={
                    <div className="coach-page" id="CoachPage">
                        {trainer3}
                    </div>}>
            </Route>
            <Route
                path={`/Trainers/${coachName4}`}
                element={<div className="coach-page" id="CoachPage">
                    {trainer4}
                </div>}
            ></Route >
            <Route
                path={`/Classes`}
                element={<ClassesPage />}
            ></Route >
            <Route
                path={`/Classes/${className1}`}
                element={<ClassPage count={"0"} />}
            ></Route >
            <Route
                path={`/Classes/${className2}`}
                element={
                    <div className="class-page" id="classPage">
                        {class2}
                    </div>}
            ></Route >
            <Route
                path={`/Classes/${className3}`}
                element={
                    <div className="class-page" id="classPage">
                        {class3}
                    </div>}
            ></Route >
            <Route
                path={`/Classes/${className4}`}
                element={
                    <div className="class-page" id="classPage">
                        {class4}
                    </div>}
            ></Route >
        </Routes >
        <Footer></Footer>
    </>);
}

export default App;
