# .NET Core Web API to serve song lyrics

## About 
This readme provides detailed information regarding building the docker image and testing the web API

## How to run
- After cloning the code, to build the docker image, make sure the Dockerfile has the correct naming for the images.
- Open command prompt from the directory where the Dockerfile is present.
- Execute ```docker build -f Dockerfile -t <<<your desired image name>>> .```
- After building the image, type ```docker run --rm -p 5010:5010 <<<docker image name>>>```
- Make sure the port numbers are same since the port exposed in the Dockerfile is 5010.
- Once the container is running, open browser and type ```localhost:5010/testHealth``` to check if the service is up and running.
- Once this is done, leave the port open and listening and move on to MVC_Frontend readme. 
