import { Injectable, NotFoundException } from '@nestjs/common';
import { Book } from 'src/Entities/book.entity';

@Injectable()
export class BooksService {
    private count: number = 1;
    private books: Book[] = [
        {
            id: 1,
            name: 'Homo Sapiens',
            description: 'History of the humanity',
            price: 100,
            stock: 34,
            image: '',
        }];

    findAll() {
        return this.books;
    }

    findOne(id: number) {
        const book = this.books.find((item) => item.id === id);
        if (!book) {
            throw new NotFoundException(`Book #${id} not found`);
        }
        return book;
    }

    create(payload: any) {
        this.count++;
        const newBook = {
            id: this.count,
            ...payload,
        };

        this.books.push(newBook);
        return newBook;
    }

    update(id: number, payload: any) {
        const book = this.findOne(id);
        const index = this.books.findIndex((item) => item.id === id);
        this.books[index] = {
            ...book,
            ...payload,
        };
        return this.books[index];
    }

    remove(id: number) {
        const index = this.books.findIndex((item) => item.id === id);
        if (index === -1) {
            throw new NotFoundException(`Book #${id} not found`);
        }
        this.books.splice(index, 1);
        return true;
    }
}
