export class Usuario {

  rut: string;
  email: string;
  clave: string;
  nombreCompleto: string;
  telefono: string;

  constructor(rut: string, email: string, clave: string, nombreCompleto: string, telefono: string) {
    this.rut = rut;
    this.email = email;
    this.clave = clave;
    this.nombreCompleto = nombreCompleto;
    this.telefono = telefono;
  }

}
