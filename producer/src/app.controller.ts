import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('KAFKA_PRODUCER') private client: ClientKafka) {}

  @Post()
  calculateSum(@Body() payload) {
    return this.client.send('sum', payload);
  }
}
