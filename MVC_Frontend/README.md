# .NET Core MVC frontend to display lyrics from the WebAPI
## About 
This readme provides detailed information regarding building the docker image and testing the MVC core app.

## How to run
- After cloning the code, to build the docker image, make sure the Dockerfile has the correct naming for the images.
- Open terminal and run ```dotnet build```
- Open command prompt from the directory where the Dockerfile is present.
- Execute ```docker build -f Dockerfile -t <<<your desired image name>>> .```
- After building the image, type ```docker run --rm -p 5004:5004 <<<docker image name>>>```
- Make sure the port numbers are same since the port exposed in the Dockerfile is 5004.
- Once the container is running, open browser and type ```localhost:5004/testHealth``` and ```localhost:5004/testCommsApi, localhost:5004/testCommsJava and localhost:5004/testCommsPython``` to check if the service is up and running.
