import React, { useState, useCallback, useEffect } from 'react';
import Board from './Board';
import { GiSpeaker, GiSpeakerOff } from 'react-icons/gi';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import clickSound from '../sounds/clidk2.mp3'
import windSound from '../sounds/win.mp3'

// GiSpeakerOff

const Game = ({ handleScreen }) => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        console.log(calculateWinner(squares));
        if (calculateWinner(squares)) {

            const audio = new Audio(windSound);
            if (isSoundOn) {
                audio.play();
            }
            setTimeout(() => {
                setSquares(Array(9).fill(null));
            }, 5000);
        }

    }, [squares, isSoundOn])

    const handleClick = () => {
        const audio = new Audio(clickSound);
        if (isSoundOn) {
            audio.play();
        }
    }

    const handleSound = () => {
        setIsSoundOn(!isSoundOn);
    }
    const handlerScreen = () => {
        if (isFullScreen) {
            handleScreen.exit();
        } else {
            handleScreen.enter();
        }
        setIsFullScreen(!isFullScreen);

    }

    const handleReset = () => {
        setSquares(Array(9).fill(null))
    }

    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    return (
        <>
            <div >
                <div className='game_header'>
                    <h1>Tic Tac Toe</h1>
                    <ul className='icons'>
                        <li onClick={() => {
                            handleClick()
                            handleSound();
                        }} className='icon'>
                            {
                                isSoundOn ? <GiSpeaker /> : <GiSpeakerOff />
                            }

                        </li>
                        <li onClick={() => {
                            handleClick()
                            handlerScreen()
                        }} className='icon'>
                            {isFullScreen ? <AiOutlineFullscreenExit /> : <AiOutlineFullscreen />}
                        </li>
                        <li onClick={() => {
                            handleClick();
                            handleReset();
                        }} className='icon'>
                            <BiReset />
                        </li>
                    </ul>
                </div>

                <Board
                    squares={squares} setSquares={setSquares}
                    handleReset={handleReset} isSoundOn={isSoundOn} />
            </div>
        </>
    );
};

export default Game;