import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { BoardsService } from './boards.service';
import { Board, BoardStatus } from "./boards.model";
import { createBoardDto } from './dto/create-board.dto';
import { ApiTags, ApiOperation} from '@nestjs/swagger'

@ApiTags('보드 API')
@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) { }

    @Get('/')
    @ApiOperation({summary: "목록 조회"})
    getAllBoard(): Board[] {
        return this.boardsService.getAllBoards();
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    createBoard(
        @Body() createBoardDto: createBoardDto
    ): Board {
        return this.boardsService.createBoard(createBoardDto);
    }

    @Get('/:id')
    getBoardById(@Param('id') id: string): Board {
        return this.boardsService.getBoardById(id)
    }

    @Delete('/:id')
    deleteBoard(@Param('id') id: string) {
        return `${this.boardsService.deleteBoard(id)}의 데이터가 삭제가 완료되었습니다.`;
    }

    @Patch('/:id/status')
    updateBoardStatus(@Param('id') id: string, @Body('status') status: BoardStatus): Board {
        return this.boardsService.updateBoardStatus(id, status)
    }
}

