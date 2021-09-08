import { MiddlewareConsumer, Module, RequestMethod } from "@nestjs/common";
import { AuthGuard, KeycloakConnectModule, ResourceGuard, RoleGuard } from "nest-keycloak-connect";
import { KeycloakConfigService } from "./config/keycloak-config.service";
import { ConfiKeycloakgModule } from "./config/configkeycloak.module";
import { APP_GUARD } from "@nestjs/core";
import { LoggerMiddleware } from "./logger.middleware";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    KeycloakConnectModule.registerAsync({
      useExisting: KeycloakConfigService,
      imports: [ConfiKeycloakgModule]
    }),
    UserModule
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: ResourceGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleGuard,
    },
  ]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}