# react-advent-calendar-2022

## Description

- The starter files and finished project initially created by Thomas Weibenfalk can be found in YouTube video "[React Advent Calendar - With Typescript](https://www.youtube.com/watch?v=noyJTgRx32k)".

## Resources

- ["weibenfalk/advanced-react-calendar-2021" GitHub repository link](https://github.com/weibenfalk/advanced-react-calendar-2021).

- YouTube video "[React Advent Calendar - With Typescript](https://www.youtube.com/watch?v=noyJTgRx32k)".

- Alternative YouTube video "[Building an Advent Calendar with JavaScript, HTML & CSS](https://www.youtube.com/watch?v=KXPD11CQLGE)".

- [HTML Color Codes](https://htmlcolorcodes.com/).

- [PNG to JPG](https://png2jpg.com/).

## First steps to start from scratch

1. Download files from [advanced-react-calendar-2021 GitHub repository](https://github.com/weibenfalk/advanced-react-calendar-2021).

2. Go inside the folder "react-calendar-start-here" from the terminal.

3. Type `npm install`.

    ![](assets/npm-install.jpg)

4. Then type `npm run dev`. This will start up the "Vite" configuration that Thomas Weibenfalk created for starting with this project.

## Precisions

- The little flip of the hatches is all made with CSS.

- The state of the calendar (currently open and closed hatches) is saved in the `localStorage`.

## Useful commands

- Listing all process occupying port 3000 (cf. "[Stack Overflow - How npm start runs a server on port 8000](https://stackoverflow.com/questions/39322089/node-js-port-3000-already-in-use-but-it-actually-isnt)"):

    ```shell script
    lsof -i tcp:3000
    ```

- Killing all process occupying port 3000 (cf. "[FolksTalk - Port 3000 Is Already In Use Nodemon App Crashed With Code Examples](https://www.folkstalk.com/2022/09/port-3000-is-already-in-use-nodemon-app-crashed-with-code-examples.html)"):

    ```shell script
	sudo kill -9 $(sudo lsof -t -i:3000)
    ```

- Specify app to run on port 3001 (cf. "[Stack Overflow - How npm start runs a server on port 8000](https://stackoverflow.com/questions/24750253/how-npm-start-runs-a-server-on-port-8000)"):

    ```shell script
	npm run dev -- --port 3001
    ```

## Known issue

- There is currently some troubles when using `localStorage`. During development it is preferable to avoid using `localStorage` completely.