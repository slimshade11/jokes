import { inject, Injectable, NgZone } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private messageService: MessageService = inject(MessageService);
  private ngZone: NgZone = inject(NgZone);

  public showMessage(severity: string, summary: string, detail: string): void {
    this.ngZone.run(() => {
      this.messageService.clear();
      this.messageService.add({
        severity,
        summary,
        detail,
        life: 4000,
      });

      setTimeout((): void => {
        this.messageService.clear();
      }, 5000);
    });
  }
}
