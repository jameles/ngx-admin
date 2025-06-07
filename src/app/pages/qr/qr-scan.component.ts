import { Component, OnInit } from '@angular/core';
import Webcam from 'webcam-easy';

@Component({
  selector: 'ngx-qr-scan',
  templateUrl: './qr-scan.component.html',
})
export class QrScanComponent implements OnInit {
  webcam!: Webcam;
  qrResult = '';
  isCameraOn = false;

  ngOnInit() {
    this.webcam = new Webcam(
      document.getElementById('webcam') as HTMLVideoElement,
      'environment'
    );
  }

  startCamera() {
    this.webcam.start()
      .then(() => {
        this.isCameraOn = true;
        this.captureLoop();
      })
      .catch(console.error);
  }

  captureLoop() {
    if (!this.isCameraOn) return;
    this.webcam
      .canvas
      .getContext('2d')
      ?.drawImage(this.webcam.video, 0, 0);

    // Ici tu devras intégrer une bibliothèque JS pour décoder le QR Code sur le canvas,
    // par exemple `jsqr` ou `zxing`. Pour simplifier, on montre juste la vidéo.

    requestAnimationFrame(() => this.captureLoop());
  }

  stopCamera() {
    this.webcam.stop();
    this.isCameraOn = false;
  }
}
