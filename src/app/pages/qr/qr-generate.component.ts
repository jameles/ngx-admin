import { Component } from '@angular/core';
import { QrService } from './qr.service';

@Component({
  selector: 'ngx-qr-generate',
  templateUrl: './qr-generate.component.html',
})
export class QrGenerateComponent {
  inputData = '';
  encryptedData = '';
  showQr = false;

  constructor(private qrService: QrService) {}

  generate() {
    this.encryptedData = this.qrService.encrypt(this.inputData);
    this.showQr = !!this.encryptedData;
  }
}
