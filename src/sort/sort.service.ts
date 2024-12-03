import { Injectable } from '@nestjs/common';
import { SortDto } from './dto/sort.dto';

@Injectable()
export class SortService {
  sortNumbers(sortDto: SortDto): { sortedNumbers: number[] } {
    const sortedNumbers = [...sortDto.numbers].sort((a, b) => a - b);
    return { sortedNumbers };
  }
}
