import { Controller, Post, Body, Logger } from '@nestjs/common';
import { SortDto } from './dto/sort.dto';
import { SortService } from './sort.service';

@Controller('sort')
export class SortController {
  private readonly logger = new Logger(SortController.name);

  constructor(private readonly sortService: SortService) {}

  @Post()
  sortNumbers(@Body() sortDto: SortDto): { sortedNumbers: number[] } {
    this.logger.log(
      'numbers for sorting: ' + JSON.stringify(sortDto.numbers),
    );

    const result = this.sortService.sortNumbers(sortDto);

    this.logger.log('Sorted numbers: ' + JSON.stringify(result.sortedNumbers));

    return result;
  }
}
