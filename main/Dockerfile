FROM python:3.10.2
ENV PYTHONBUFFERED=1
WORKDIR /main
COPY /main/requirements.txt /main/requirements.txt
RUN pip install -r requirements.txt
COPY . /main