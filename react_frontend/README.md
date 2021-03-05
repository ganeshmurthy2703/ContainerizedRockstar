# React frontend to display lyrics from the WebAPI
## About 
This readme provides detailed information regarding building the docker image and testing the React app.

## How to run
- After cloning the code, to build the docker image, make sure the Dockerfile has the correct naming for the images.
- Open terminal and run ```npm install``` and then ```npm run build```
- Open command prompt from the directory where the Dockerfile is present.
- Execute ```docker build -f Dockerfile -t <<<your desired image name>>> .```
- After building the image, type ```docker run --rm -p 1237:80 <<<docker image name>>>```
- Note that port 1237 is not mandatory. Nginx will serve on port 80, and hence the port can be forwarded to any random available ports on the computer. 
- Once the container is running, open browser and type ```localhost:1237/testHealth``` and ```localhost:1237/testCommsApi, localhost:1237/testCommsJava and localhost:1237/testCommsPython``` to check if the service is up and running.
