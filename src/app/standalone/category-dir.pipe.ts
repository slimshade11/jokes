import { Pipe, PipeTransform } from '@angular/core';
import { Categories } from '@app/common/constants/categories';
import { Category } from '@app/common/models/category.model';

@Pipe({
  name: 'categoryDir',
  standalone: true,
  pure: true,
})
export class CategoryDirPipe implements PipeTransform {
  private categories: Category[] = Categories;

  transform(categoryId: string): string {
    const categoryName: string | undefined = this.categories.find((category: Category): boolean => category.id === categoryId)?.name;

    return categoryName ? categoryName : 'Nie znaleziono';
  }
}
