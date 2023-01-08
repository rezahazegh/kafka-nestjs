import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() {}

  @MessagePattern('sum') // Our topic name
  calculateSum(@Payload() payload) {
    console.log(payload);
    const { num1, num2 } = payload;
    const sum = num1 + num2;
    return `Sum of ${num1} and ${num2} is: ${sum}`;
  }
}
