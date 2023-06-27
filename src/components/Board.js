import Square from './Square';
import clickSound from '../sounds/click-sound.wav'
const Board = ({ isSoundOn, squares, setSquares }) => {
    const audio = new Audio(clickSound);


    const handleClick = (i) => {
        if (isSoundOn)
            audio.play();
        const newSquares = [...squares];
        const current = Math.round(Math.random() * 1) === 0 ? 'X' : 'O';
        if (!newSquares[i]) {
            newSquares[i] = current;
        }
        setSquares(newSquares);

    }

    console.log(squares);

    return (
        <div className='board'>
            {
                squares.map((square, i) => <Square value={square} key={i} handleClick={() => handleClick(i)} />)
            }

        </div>
    );
};

export default Board;