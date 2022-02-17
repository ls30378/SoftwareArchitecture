import pika
import json
from main import Libri, db, Zhanri, Autori, Vleresime
# params = pika.URLParameters(
#     'amqps://slcycuev:BvzxrxsaPYlXF85_48mdqz_GgfnGuQiz@rattlesnake.rmq.cloudamqp.com/slcycuev')

params = pika.URLParameters('amqp://guest:guest@rabbitmq:5672/')
connection = pika.BlockingConnection(params)

channel = connection.channel()

channel.queue_declare(queue='main')


def callback(ch, method, properties, body):
    data = json.loads(body)
    if properties.content_type == 'zhanri_created':
        zhanri = Zhanri(id=data['id'], zhanri=data['zhanri'])
        # zhanri = Zhanri(id=222, zhanri='hololi')
        # print(zhanri)
        db.session.add(zhanri)
        db.session.commit()
    elif properties.content_type == 'liber_created':
        liber = Libri(id=data['id'], titulli=data['titulli'], image=data['image'], isbn=data['isbn'],
                      description=data['description'], autori_id=data['autori'], zhanri_id=data['zhanri'])
        # print(liber)
        # prova
        # zhanri = Zhanri(id=322, zhanri='holol')
        # end prova
        db.session.add(liber)
        db.session.commit()
    elif properties.content_type == 'autor_created':
        autori = Autori(id=data['id'], emri=data['emri'],
                        mbiemri=data['mbiemri'], biografi=data['biografi'])
        db.session.add(autori)
        db.session.commit()
    elif properties.content_type == 'vleresime_created':
        vleresime = Vleresime(
            id=data['id'], stars=data['stars'], libri_id=data['libri_id'])
        db.session.add(vleresime)
        db.session.commit()


channel.basic_consume(
    queue='main', on_message_callback=callback, auto_ack=True)

print('Started Consuming')

channel.start_consuming()

channel.close()
