import { useEffect, useState } from 'react';
import Sect2 from './components/section1/sect2.jsx';
import Sect3 from "./components/Section3/sect3.jsx"
import './App.css';

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

            <div className="viewport-display">
                {viewport.width}px × {viewport.height}px
            </div>
        </>
    );
}

export default App;