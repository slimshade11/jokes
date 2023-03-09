import { FormControl } from '@angular/forms';

export interface AddJokeForm {
  category: FormControl<string>;
  content: FormControl<string>;
}
