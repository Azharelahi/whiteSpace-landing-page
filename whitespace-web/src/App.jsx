import { useEffect, useState } from 'react';
import Sect2 from './components/section1/sect2.jsx';
import Sect3 from "./components/Section3/sect3.jsx"
import './App.css';
import Sect4 from './components/Section4/sect4.jsx';
import Sect5 from './components/Section5/sect5.jsx';
import Sect6 from './components/Section6/sect6.jsx';
import Sect7 from './components/section7/sect7.jsx';
import Sect8 from './components/your_data/sect8.jsx';
import Sect9 from './components/OurSponsors/sect9.jsx';
import Sect10 from './components/workWith/sect10.jsx';
import Sect11 from './components/clientSays/sect11.jsx';

function App() {
    const [viewport, setViewport] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const updateViewport = () => {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', updateViewport);

        return () => {
            window.removeEventListener('resize', updateViewport);
        };
    }, []);

    return (
        <>
            <Sect2 />
            <Sect3/>
            <Sect4/>
            <Sect5/>
            <Sect6/>
            <Sect7/>
            <Sect8/>
            <Sect9/>
            <Sect10/>
            <Sect11/>
            <div className="viewport-display">
                {viewport.width}px × {viewport.height}px
            </div>
        </>
    );
}

export default App;