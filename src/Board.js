import React, { Component } from 'react'
import Light from './Light'
import './Board.css'

class Board extends Component {
    static defaultProps = {
        nrows: 5,
        ncols: 5,
        chanceLightStartsOn: 0.25
    }
    
    constructor(props){
        super(props)

        this.state = {
            hasWon: false,
            board: this.createBoard()
        }
    }

    createBoard(){
        let board = []
        for(let y = 0; y < this.props.nrows; y++){
            let row = [];
            for(let x = 0; x < this.props.ncols; x++){
                row.push(Math.random() < this.props.chanceLightStartsOn) 
            }
            board.push(row);
        }
        return board;
    }

    flipCellsAroundMe(coord){

    }

    render() {
        const tblboard = [];
        for(let y = 0; y < this.props.nrows;y++){
            let row = []
            for(let x=0;x < this.props.ncols; x++){
                row.push(<Light isLit={this.state.board[x][y]} />)
            }
        tblboard.push(<tr>{row}</tr>)
        }
        return (
            <table className="Board">
                <tbody>
                    {tblboard}
                </tbody>  
            </table>
        )
    }
}

export default Board