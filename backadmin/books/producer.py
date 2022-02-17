import pika
import json

# params = pika.URLParameters(
#     'amqps://slcycuev:BvzxrxsaPYlXF85_48mdqz_GgfnGuQiz@rattlesnake.rmq.cloudamqp.com/slcycuev')

params = pika.URLParameters('amqp://guest:guest@rabbitmq:5672/')

connection = pika.BlockingConnection(params)

channel = connection.channel()


def publish(method, body):
    properties = pika.BasicProperties(method)
    print('producedi')
    channel.basic_publish(exchange='', routing_key='main',
                          body=json.dumps(body), properties=properties)

# def publish():
#     channel.basic_publish(exchange='', routing_key='main',
#                           body='HELLO FROM THE OTHER SIDE')
