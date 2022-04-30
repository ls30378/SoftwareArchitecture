# SoftwareArchitecture

Is an internet book database, which provides the users to
search, rate, and comment the books. It also has a built-in
white noise application, to make a relaxing ambient for
reading.
It is built following microservice architecture principles.
Tech used:
* React
** Redux
** Redux-thunk
* Django RESTFramework (admin service)
* Flask (main service)
* ExpressJs (comment service)
* MySQL (admin, main service)
* MongoDB (comment service)
* RabbitMQ
* ExpressGateway
* Docker

## UI Design

[FIGMA Link](https://www.figma.com/file/8s9UiH7BERGfjrtNdSUySa/LIBRARIUM?node-id=0%3A1)

## Client

Made with ReactJS

## Backadmin

Made with Django and MySQL

## Main

Made with Flask and MySQL

## Comment

Made with Express (Node) and MongoDB

## Docker

docker-compose

### mongodb

MongoDB for Express Backend

### mongo-express

GUI Frontend for Mongo

### comment

Express (NodeJs) backend for handling comments

### rabbitmq

RabbitMQ, gets new Books from 'admin' and sends them to 'comment' and 'main'

### frontend

Frontend built with ReactJS

### admin

Django (Python) backend

### admin-db

MySQL Database for 'admin'

### konsumuesi

Python consumer (RabbitMQ) for 'main' backend

### main-backend

Flask (Python) backend

### main-db

MySQL Database for 'main-backend'
