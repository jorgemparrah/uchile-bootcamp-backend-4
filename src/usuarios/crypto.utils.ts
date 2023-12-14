import * as Crypto from 'crypto';

export class CryptoUtils {

  static hashing(texto: string): string {
    const modo = 'md5' ;
    const hash = Crypto.createHash( modo ).update(texto).digest('hex');
    return hash;
  }

}
