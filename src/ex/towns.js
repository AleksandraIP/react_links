import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


const FuncTown =()=>{
    return(
        <>
        <Router>
            <div>
                <Nav/>
                <Routes>
                    <Route path='/' element={<Info/>}></Route>
                    <Route path='/attractions' element={<Attractions/>}></Route>
                    <Route path='/photo' element={<Photo/>}></Route>
                    <Route path='*' element={<h2>Not Found</h2>}></Route>
                </Routes>
            </div>
        </Router>
        </>
    )
}

function Nav(){
    return <nav>
        <Link className='links' to='/'>Main</Link>
        <Link className='links' to='/attractions'>Attractions</Link>
        <Link className='links' to='/photo'>Photo</Link>
    </nav>
}

const Info = () => {
    return (
        <div>
            <h1>Kyiv</h1>
            <p>... is the capital and most populous city of Ukraine. It is in north-central Ukraine along the Dnieper River. </p>
            <p>Kyiv is an important industrial, scientific, educational, and cultural center in Eastern Europe. It is home to many high-tech industries, higher education institutions, and historical landmarks. The city has an extensive system of public transport and infrastructure, including the Kyiv Metro.</p>
        </div>
    );
};

const Attractions = () => {
    return (
        <div>
            <h1>Attractions</h1>
            <p>It is said that one can walk from one end of Kyiv to the other in the summertime without leaving the shade of its many trees. Most characteristic are the horse-chestnuts</p>
            <p>Kyiv is known as a green city with two botanical gardens and numerous large and small parks. The National Museum of the History of Ukraine in the Second World War is located here, which offers both indoor and outdoor displays of military history and equipment surrounded by verdant hills overlooking the Dnieper river.</p>
        </div>
    );
};

const Photo = () => {
    return (
        <div>
            <img src={process.env.PUBLIC_URL + '/kyiv.jpg'} />
        </div>
    );
};

export default FuncTown;