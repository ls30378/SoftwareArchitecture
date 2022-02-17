FROM python:3.10.2
ENV PYTHONBUFFERED=1
WORKDIR /backadmin
COPY /backadmin/requirements.txt /backadmin/requirements.txt
RUN pip install -r requirements.txt
COPY . /backadmin