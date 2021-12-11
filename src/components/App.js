import React from "react";
import { BrowserRouter as BR, Route, Routes} from 'react-router-dom';
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";



function App(props) {
    return (
        <BR>
            <Routes>
                <Route path="/exercise" element={<Exercises />} />
                <Route path="/exercise/new" element={<ExerciseNew />} />
                <Route path="*" element={<NotFound />}/>

            </Routes>

        </BR>
    )
}

export default App