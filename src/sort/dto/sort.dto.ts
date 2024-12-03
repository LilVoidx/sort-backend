import { IsArray, IsInt, ArrayNotEmpty } from 'class-validator';

export class SortDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsInt({ each: true })
  numbers: number[];
}
