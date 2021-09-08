import { Injectable } from '@nestjs/common';
import { KeycloakConnectOptions, KeycloakConnectOptionsFactory, PolicyEnforcementMode, TokenValidation } from 'nest-keycloak-connect';

@Injectable()
export class KeycloakConfigService implements KeycloakConnectOptionsFactory {

  createKeycloakConnectOptions(): KeycloakConnectOptions {
    return {
      authServerUrl: 'http://192.168.1.200:8080/auth',
      realm: 'MeetAMate',
      clientId: 'MeetAMate',
      secret: '360805e0-3867-432b-99ee-2cac451475fd',
      //cookieKey: 'KEYCLOAK_JWT',
      logLevels: ['verbose'],
      useNestLogger: false,
      policyEnforcement: PolicyEnforcementMode.PERMISSIVE,
      tokenValidation: TokenValidation.ONLINE,
    };
  }
  
}
