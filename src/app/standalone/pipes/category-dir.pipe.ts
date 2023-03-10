import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '@common/constants/categories';
import { Category } from '@common/models/category.model';

@Pipe({ name: 'categoryDir', standalone: true, pure: true })
export class CategoryDirPipe implements PipeTransform {
  public transform(categoryId: string): string {
    const categoryName: string | undefined = Categories.find((category: Category): boolean => category.id === categoryId)?.name;

    return categoryName ? categoryName : 'Nie znaleziono';
  }
}
