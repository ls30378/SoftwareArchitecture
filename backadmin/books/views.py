from django.shortcuts import render
from rest_framework import viewsets, status
from rest_framework.response import Response
from .models import Libri, Autori, Vleresime, Zhanri
from .serializers import LibriSerializer, AutoriSerializer, VleresimeSerializer, ZhanriSerializer
from .producer import publish, publishTwo
# Create your views here


class ZhanriViewSet(viewsets.ViewSet):
    def list(self, request):
        zhanri = Zhanri.objects.all()
        serializer = ZhanriSerializer(zhanri, many=True)
        # publish('zhanri_created', serializer.data)
        return Response(serializer.data)

    def create(self, request):
        serializer = ZhanriSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        publish('zhanri_created', serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LibriViewSet(viewsets.ViewSet):
    def list(self, request):  # per route shembul /api/libri
        libri = Libri.objects.all()
        serializer = LibriSerializer(libri, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = LibriSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        # serializer.save()
        publish('liber_created', serializer.data)
        publishTwo('liber_created', request.data['id'])
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):  # shembull /api/libri/<str:id>
        libri = Libri.objects.get(id=pk)
        serializer = LibriSerializer(libri)
        return Response(serializer.data)

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class AutoriViewSet(viewsets.ViewSet):
    def list(self, request):  # per route shembul /api/libri
        autori = Autori.objects.all()
        serializer = AutoriSerializer(autori, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = AutoriSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        publish('autor_created', serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):  # shembull /api/libri/<str:id>
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass


class VleresimeViewSet(viewsets.ViewSet):
    def list(self, request):  # per route shembul /api/libri
        vleresime = Vleresime.objects.all()
        serializer = VleresimeSerializer(vleresime, many=True)
        return Response(serializer.data)

    def create(self, request):
        serializer = VleresimeSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def retrieve(self, request, pk=None):  # shembull /api/libri/<str:id>
        pass

    def update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
