import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { BooksController } from './controllers/books.controller';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [AppService],
})
export class AppModule {}
