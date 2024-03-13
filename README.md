How to start with docker:

Build project image. Use command:

```
docker build -t <image_name> .
```

Run project image by command:

```
docker run -d -p 3000:3000 --name <container_name> <image_name>
```

The React application will be accessible at: http://localhost:3000/
