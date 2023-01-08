# Nest.js integration with Kafka

## Project Description
This project demonstrates a simple microservice app

1. Producer receives two number via ```REST API```.
2. Producer sends numbers to kafka ```sum``` topic.
3. Consumer subscribes to ```sum``` topic and receives numbers and returns sum of numbers.

## Directory Description

* ```infra``` directory includes ```docker-compose``` to setup kafka
* ```producer``` directory includes a projects which send payloads to kafka
* ```consumer``` directory includes a project which receives payloads from kafka

## Run and Test

After setup kafka and running ```producer``` and ```consumer``` you can call ```localhost:3000``` by ```POST``` method.

**Sample Payload:**
```
{
    "num1": 7,
    "num2": 9
}
```

**Sample Response:**

```
Sum of 7 and 9 is: 16
```

## List of Kafka Topics

By running ```npm run topic-list``` inside ```infra``` directory, you can see list of kafka topics.

Sample Response:
```
__consumer_offsets
sum
sum.reply
```