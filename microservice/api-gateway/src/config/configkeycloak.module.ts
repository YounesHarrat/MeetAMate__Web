import { Module } from '@nestjs/common';
import { KeycloakConfigService } from './keycloak-config.service';

@Module({
  imports:[],
  providers: [KeycloakConfigService],
  exports: [KeycloakConfigService],
})
export class ConfiKeycloakgModule {}
