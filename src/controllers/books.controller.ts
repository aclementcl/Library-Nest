import { Controller, Get, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, Res, Query } from '@nestjs/common';

import { Response } from 'express';
import { BooksService } from 'src/services/books.service';

@Controller('books')
export class BooksController {

    constructor(private booksService: BooksService) { }

    @Get()
    getBooks(
        @Query('limit') limit = 100,
        @Query('offset') offset = 0,
        @Query('brand') brand: string,
    ) {
        return this.booksService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.ACCEPTED)
    getBookById(@Param('id') id: string) {
        return this.booksService.findOne(+id);
    }

    @Post()
    create(@Body() payload: any) {
        return this.booksService.create(payload);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() payload: any) {
        return this.booksService.update(+id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.booksService.remove(+id);
    }
}