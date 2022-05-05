from dataclasses import dataclass
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from marshmallow import Schema, fields
from sqlalchemy.sql import func
import threading
import json
import pika
app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = 'mysql://toor:root@main-db/main'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
CORS(app)


db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow(app)

# export FLASK_APP=main
# flask db init
# flask db migrate -m 'Migration message'
# flask db upgrade


@dataclass
class Zhanri(db.Model):
    id: int
    zhanri: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    zhanri = db.Column(db.String(45))
    libri = db.relationship('Libri', backref='zhanri', lazy='dynamic')


# class ZhanriSchema(ma.SQLAlchemySchema):
#     class Meta:
#         model = Zhanri
#     id = ma.auto_field()
#     zhanri = ma.auto_field()


@dataclass
class Autori(db.Model):
    id: int
    emri: str
    mbiemri: str
    biografi: str

    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    emri = db.Column(db.String(45))
    mbiemri = db.Column(db.String(45))
    biografi = db.Column(db.Text)
    libri = db.relationship('Libri', backref='autori', lazy='joined')


@dataclass
class Libri(db.Model):
    id: int
    titulli: str
    image: str
    isbn: str
    description: str
    autori_id: int
    zhanri_id: int

    id = db.Column(db.Integer, primary_key=True, autoincrement=False)
    titulli = db.Column(db.String(45))
    image = db.Column(db.Text)
    isbn = db.Column(db.String(13))
    description = db.Column(db.Text)
    autori_id = db.Column(db.Integer, db.ForeignKey(
        'autori.id'), nullable=False)
    zhanri_id = db.Column(db.Integer, db.ForeignKey(
        'zhanri.id'), nullable=False)
    vleresime = db.relationship('Vleresime', backref='libri', lazy='joined')


@dataclass
class Vleresime(db.Model):
    id: int
    vleresime: int
    libri_id: int
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    vleresime = db.Column(db.Integer)
    libri_id = db.Column(db.Integer, db.ForeignKey('libri.id'), nullable=False)


class ZhanriSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Zhanri
        include_relationships = True


class AutoriSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Autori
        include_relationships = True


# class LibriSchema(Schema):
#     id = fields.Int()
#     titulli: fields.Str()
#     image: fields.Str()
#     isbn: fields.Str()
#     description: fields.Str()
#     autori_id: fields.Int()
#     zhanri_id: fields.Int()

#     # class Meta:
#     #     model = Libri
#     #     include_relationships = True
#     #     include_fk = True

#     autori = ma.Nested(AutoriSchema)

class LibriSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Libri
        include_relationships = True
        include_fk = True
    autori = ma.Nested(AutoriSchema)
    zhanri = ma.Nested(ZhanriSchema)


class VleresimeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Vleresime
        include_relationships = True
        include_fk = True
    libri = ma.Nested(LibriSchema)

    # vleresime = ma.auto_field()


@app.route('/')
def index():
    vleresimi = Vleresime.query.first()
    return jsonify(vleresimi)


@app.route('/api/main/books')
def getBooks():
    query = db.session.query(Autori, Libri).outerjoin(
        Libri, Autori.id == Libri.autori_id).all()
    libri = Libri.query.all()
    schema = LibriSchema(many=True)
    data = schema.dump(libri)
    return {'librat': data}


@app.route('/api/main/autor')
def getAuthors():
    return jsonify(Autori.query.all())


# @app.route('/api/vleresime')
# def getRatings():
#     return jsonify(Vleresime.query.with_entities(func.avg(Vleresime.vleresime)).filter(libri_id == 1).all())
###PIKA CONFIG###

# SEARCH llbrat me titull


@app.route('/api/main/books/<title>')
def get_books(title):
    return jsonify(Libri.query.filter(Libri.titulli.like('%'+title+'%')).all())


@app.route('/api/main/books/id/<id>')
def get_one_book(id):
    libri = Libri.query.filter(Libri.id == id).first()
    v = Vleresime.query.with_entities(func.avg(Vleresime.vleresime).label(
        'vleresime')).filter(Vleresime.libri_id == id).first()
    schema = VleresimeSchema()
    data = schema.dump(v)
    l = jsonify(libri, libri.autori, libri.zhanri, data)
    return l


@app.route('/api/main/books/vleresime/<bookid>')
def get_v_book(bookid):
    # v = db.session.query(func.avg(Vleresime.vleresime)
    #  ).filter(Vleresime.libri_id == 8).first()
    # v = Vleresime.query.first()
    v = Vleresime.query.with_entities(func.avg(Vleresime.vleresime).label(
        'vleresime')).filter(Vleresime.libri_id == 8).first()
    schema = VleresimeSchema()
    data = schema.dump(v)
    return data


@app.route('/api/main/books/vleresime', methods=['POST'])
def add_vleresim():
    req = json.loads(request.data)
    vleresim = Vleresime(vleresime=req['vleresime'], libri_id=req['libri_id'])
    db.session.add(vleresim)
    db.session.commit()
    return jsonify(req)


@app.route('/api/main/books/v')
def get_v_books():
    return jsonify(Libri.query.join(Vleresime.filter(Vleresime.libri_id.equal(2))).all())

# SEARCH autorin me emer


@app.route('/api/main/autori/<name>')
def get_autori(name):
    return jsonify(Autori.query.filter(Autori.emri.like('%'+name+'%')).all())


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
    # print('Started Consuming')
