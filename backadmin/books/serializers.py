from rest_framework import serializers

from .models import Libri, Autori, Vleresime, Zhanri


class LibriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libri
        fields = '__all__'


class AutoriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Autori
        fields = '__all__'


class VleresimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vleresime
        fields = '__all__'


class ZhanriSerializer(serializers.ModelSerializer):
    class Meta:
        model = Zhanri
        fields = '__all__'
