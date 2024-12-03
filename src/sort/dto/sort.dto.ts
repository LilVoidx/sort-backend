import { IsArray, IsNumber, ArrayNotEmpty } from 'class-validator';

export class SortDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsNumber({}, { each: true })
  numbers: number[];
}
