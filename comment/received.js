var amqp = require('amqplib/callback_api');
const Post = require('./models/post')
amqp.connect('amqp://guest:guest@rabbitmq:5672/', function (error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function (error1, channel) {
        if (error1) {
            throw error1;
        }

        var queue = 'comment';

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, async function (msg) {
            const id = msg.content.toString()
            const post = new Post({
                _id: id
            })
            try {
                console.log(post)
                await post.save()
            } catch (error) {
                console.error(error)
            }

            // const prova = msg.content.toLocaleString().valueOf("autori")

            // console.log(" [x] Received %s", msg.content.toString());
            // console.log(prova)
        }, {
            noAck: true
        });
    });
});