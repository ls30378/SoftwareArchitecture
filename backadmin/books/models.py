from django.db import models

# Create your models here.
# Tabela Autori


class Zhanri(models.Model):
    zhanri = models.CharField(max_length=45)

    def __str__(self):
        return self.zhanri


class Autori(models.Model):
    emri = models.CharField(max_length=45)
    mbiemri = models.CharField(max_length=45)
    biografi = models.TextField(blank=True)

    def __str__(self):
        return self.emri+' '+self.mbiemri
# Tabel Libri (database)


class Libri(models.Model):
    titulli = models.CharField(max_length=200)
    image = models.CharField(max_length=200)
    isbn = models.CharField(max_length=13, blank=True)
    description = models.TextField(blank=True)
    autori = models.ForeignKey(Autori, on_delete=models.CASCADE)
    zhanri = models.ForeignKey(Zhanri, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulli


class Vleresime(models.Model):
    stars = models.PositiveIntegerField()
    libri = models.ForeignKey(Libri, on_delete=models.CASCADE)
