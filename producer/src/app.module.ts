import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'producer-app',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'producer-app',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(@Inject('KAFKA_PRODUCER') private client: ClientKafka) {}

  async onModuleInit() {
    this.client.subscribeToResponseOf('sum');
    await this.client.connect();
  }
}
