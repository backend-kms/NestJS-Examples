import { Injectable, NotFoundException } from "@nestjs/common";
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid } from 'uuid';
import { createBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
    private boards: Board[] = [];

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(createBoardDto: createBoardDto): Board {
        const { title, description } = createBoardDto;
        const board: Board = {
            id: uuid(),
            title,
            description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }

    getBoardById(id: string): Board {
        const found = this.boards.find((board) => board.id === id);

        if(!found){
            throw new NotFoundException(`Can't find board with id ${id}`);
        }
        return found;
    }

    deleteBoard(id: string): string {
        const found = this.getBoardById(id)
        this.boards = this.boards.filter((board) => board.id !== found.id);
        return id;
    }

    updateBoardStatus(id: string, status: BoardStatus) {
        const board = this.getBoardById(id);
        board.status = status;
        return board;
    }
}
