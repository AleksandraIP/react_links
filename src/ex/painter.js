import React from "react";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";


const FuncPainter =()=>{
    return(
        <>
            <Router>
                <div>
                    <Nav/>
                    <Routes>
                        <Route path='/' element={<Info/>}></Route>
                        <Route path='/paintings' element={<Paintings/>}></Route>
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
        <Link className='links' to='/paintings'>Paintings</Link>
    </nav>
}

const Info = () => {
    return (
        <div>
            <h1>Salvador Dalí</h1>
            <p>11 May 1904 – 23 January 1989) was a Spanish surrealist artist renowned for his technical skill, precise draftsmanship, and the striking and bizarre images in his work. </p>
            <p>Born in Figueres, Catalonia, Spain, Dalí received his formal education in fine arts in Madrid. Influenced by Impressionism and the Renaissance masters from a young age he became increasingly attracted to Cubism and avant-garde movements. He moved closer to Surrealism in the late 1920s and joined the Surrealist group in 1929, soon becoming one of its leading exponents. His best-known work, The Persistence of Memory, was completed in August 1931, and is one of the most famous Surrealist paintings. Dalí lived in France throughout the Spanish Civil War (1936 to 1939) before leaving for the United States in 1940 where he achieved commercial success. He returned to Spain in 1948 where he announced his return to the Catholic faith and developed his "nuclear mysticism" style, based on his interest in classicism, mysticism, and recent scientific developments.</p>
        </div>
    );
};

const Paintings = () => {
    return (
        <div>
            <div className='paint'>
            <img className='img' src={process.env.PUBLIC_URL + '/surreal.jpg'}/>
            </div>
            <div className='paint'>
            <img className='img' src={process.env.PUBLIC_URL + '/surreal1.jpg'}/>
            </div>
            <div className='paint'>
            <img className='img' src={process.env.PUBLIC_URL + '/surreal2.jpg'}/>
            </div>
        </div>

    );
};


export default FuncPainter;