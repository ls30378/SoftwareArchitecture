import pika
import json

# params = pika.URLParameters(
#     'amqps://slcycuev:BvzxrxsaPYlXF85_48mdqz_GgfnGuQiz@rattlesnake.rmq.cloudamqp.com/slcycuev')

params = pika.URLParameters('amqp://guest:guest@rabbitmq:5672/')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publishTwo(method, body):
    properties = pika.BasicProperties(method)
    channel.basic_publish(exchange='', routing_key='comment',
                          body=json.dumps(body), properties=properties)
