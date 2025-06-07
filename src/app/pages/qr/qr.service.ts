import { Injectable } from '@angular/core';
import { JSEncrypt } from 'jsencrypt';

@Injectable({ providedIn: 'root' })
export class QrService {
  private crypt = new JSEncrypt();

  constructor() {
    // Génération ou chargement d’une clé RSA (exemple simplifié)
    const publicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArI5D8F2ql9Y91l9UZDcY
gkPAhrz9MqEbzvKLTKo4bB0O+OM9QDR4GlyKu6E0JHb4R6N68uG1e6bfw3R0Icpe
ChB9MyT+It5hpV0vTXDthY6Y4ReMCiSLCn6Q3RUI9KWokQc/2/FpJd7PZTS3gM2k
7kXo/7x47C5Vh4Rv5J53gCdWZelP1IGx37mKR2eQG3vVtKq4Oe6q7m1P8vWVrNpq
TDTpssX9WyN+8Rtl2QQ8nEgSxn0ePi9gxnsUP1JuqdbOczE4QnmW68e3AlcYmZxY
xpRvx5K72lMDF1x3LwTvmzdrPQj3wxAXi9X5N4mPq8M7qVE2zT0r4Rf1fAGZVXMC
8wIDAQAB
-----END PUBLIC KEY-----`;

    this.crypt.setPublicKey(publicKey);
  }

  encrypt(data: string): string {
    return this.crypt.encrypt(data) || '';
  }
}
