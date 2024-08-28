import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { FaChessKing, FaChessQueen, FaChessRook, FaChessKnight, FaChessBishop, FaChessPawn } from 'react-icons/fa';

function Chessboard() {
  return (
    <div className="chessboard">
    
      <div className="squareblack"><FaChessRook className="icon" /></div>
      <div className="squarewhite"><FaChessKnight className="icon" /></div>
      <div className="squareblack"><FaChessBishop className="icon" /></div>
      <div className="squarewhite"><FaChessQueen className="icon" /></div>
      <div className="squareblack"><FaChessKing className="icon" /></div>
      <div className="squarewhite"><FaChessBishop className="icon" /></div>
      <div className="squareblack"><FaChessKnight className="icon" /></div>
      <div className="squarewhite"><FaChessRook className="icon" /></div>

      <div className="squarewhite"><FaChessPawn className="icon" /></div>
      <div className="squareblack"><FaChessPawn className="icon" /></div>
      <div className="squarewhite"><FaChessPawn className="icon" /></div>
      <div className="squareblack"><FaChessPawn className="icon" /></div>
      <div className="squarewhite"><FaChessPawn className="icon" /></div>
      <div className="squareblack"><FaChessPawn className="icon" /></div>
      <div className="squarewhite"><FaChessPawn className="icon" /></div>
      <div className="squareblack"><FaChessPawn className="icon" /></div>


      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>

      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>

      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>

      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      <div className="squarewhite"></div>
      <div className="squareblack"></div>
      
      <div className="squareblack"><FaChessPawn className="icon1" /></div>
      <div className="squarewhite"><FaChessPawn className="icon1" /></div>
      <div className="squareblack"><FaChessPawn className="icon1" /></div>
      <div className="squarewhite"><FaChessPawn className="icon1" /></div>
      <div className="squareblack"><FaChessPawn className="icon1" /></div>
      <div className="squarewhite"><FaChessPawn className="icon1" /></div>
      <div className="squareblack"><FaChessPawn className="icon1" /></div>
      <div className="squarewhite"><FaChessPawn className="icon1" /></div>

      <div className="squarewhite"><FaChessRook className="icon1" /></div>
      <div className="squareblack"><FaChessKnight className="icon1" /></div>
      <div className="squarewhite"><FaChessBishop className="icon1" /></div>
      <div className="squareblack"><FaChessKing className="icon1" /></div>
      <div className="squarewhite"><FaChessQueen className="icon1" /></div>
      <div className="squareblack"><FaChessBishop className="icon1" /></div>
      <div className="squarewhite"><FaChessKnight className="icon1" /></div>
      <div className="squareblack"><FaChessRook className="icon1" /></div>

    </div>
  );
}

ReactDOM.render(<Chessboard />, document.getElementById('root'));
