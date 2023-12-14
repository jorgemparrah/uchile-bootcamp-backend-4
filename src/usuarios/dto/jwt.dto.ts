import { ApiProperty } from "@nestjs/swagger";

export class JwtDto {

  @ApiProperty({ description: 'Token de autenticación', example: "eyJhbGciO..." })
  token: string;

}
