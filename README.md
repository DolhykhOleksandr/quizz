### To run project in your device follow this few steps:

Open command prompt in folder, where you want your app to be located, after this enter command:

```
git clone https://github.com/DolhykhOleksandr/quizz.git
```

Go to the aplication directory: open project in IDE and open treminal here, enter next command:

```
cd quizz
```

Install all dapendencies: stay in the terminal and type the next one:

```
npm install --save-dev
```

After all dependencies has downloaded, enter this command to run React app:

```
npm start
```

Now your browser will automatically open the page: http://localhost:3000/

### How to start with docker:

Build project image. Use command:

```
docker build -t <image_name> .
```

Run project image by command:

```
docker run -d -p 3000:3000 --name <container_name> <image_name>
```

The React application will be accessible at: http://localhost:3000/
