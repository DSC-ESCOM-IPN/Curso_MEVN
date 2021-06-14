FROM nginx:1.20
RUN apt update && apt install vim git -y 
RUN git clone https://github.com/cloudacademy/static-website-example.git /usr/share/nginx/mven
