import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';

import {Response} from 'express';

@Controller('books')
export class BooksController {

    @Get()
    getBooks() {
        return 'hola';
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getBookById(@Res() response: Response, @Param('id') id: string) {
        response.status(200).send(id);
    }

    @Post()
    create(@Body() payload: any) {
        return {
            message: "hola",
            payload
        }
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() payload: any) {
        return {
            message: 'update',
            payload,
            id
        }
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return {
            message: 'delete',
            id
        }
    }
}