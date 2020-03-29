import React, { useState, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

function App({ content }: { content: string }) {
    const [ isClockwise, setIsClockwise ] = useState<boolean>( false );
    
    const onClick = useCallback( () => {
            setIsClockwise( !isClockwise );
        }, [ isClockwise ],
    );

    return (
        <div className="App">
            <header className="App-header">
                <img
                    src={logo}
                    className={ isClockwise ? 'App-logo' : 'App-logo reverse' }
                    alt="logo" />
                <p>
                    { content }
                </p>
                <p
                    className="App-link"
                    onClick={ onClick }
                >
                    Reverse React
                </p>
            </header>
        </div>
    );
}

export default App;
