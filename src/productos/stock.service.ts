import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { STOCK } from 'src/datos';
import { Repository } from 'typeorm';
import { StockDto } from './dto/stock.dto';
import { Stock } from './entities/stock';
import { StockMapper } from './mapper/stock.mapper';

@Injectable()
export class StockService {

  constructor(@InjectRepository(Stock) private readonly stockRepository: Repository<Stock>) {}

  async findAll(): Promise<StockDto[]> {
    const lista = await this.stockRepository.find();
    return StockMapper.toDtoList(lista);
  }

  async fillData() {
    const lista = await this.stockRepository.find();
    if (lista.length == 0) {
      for (const stock of STOCK) {
        await this.stockRepository.save(stock);
      }
    }
  }

}
