# TaskTrove
# React Todo App with Prioritization, Quick Entry, and Drag-and-Drop Features

This is a robust Todo application built using React and Express.js. The application provides a user-friendly interface to manage, organize, and prioritize your tasks with ease.

## Features

1. **Reorder Tasks:** Drag-and-drop functionality allows you to easily rearrange your tasks based on your preference or priority.
2. **Prioritization:** Prioritize your tasks easily by dragging them around the list. The top-most task can be considered of high priority.
3. **Quick Entry:** A quick and easy input form allows you to add tasks swiftly.
4. **Pictures on Tasks:** Add a picture to your tasks to make them more recognizable or to add more details. This is done through a simple file upload function.
5. **Sync:** This app is set up with an Express.js server, which lets you sync your tasks across multiple devices (provided a database and relevant API routes are added).
6. **Future Tasks:** Add tasks for future dates with the convenient date picker in each task entry.
7. **Voice Capture:** (The voice capture functionality is not included in the current version of the app but could be added in future updates.)

## Setup & Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in terminal.
3. Run `npm install` to install all the necessary dependencies.
4. Start the Express server by running `node server.js`.
5. In a new terminal window, navigate to the project directory again and start the React app by running `npm start`.
6. The app will be live at `http://localhost:3000`.

## Usage

- To add a new task, type your task into the input field and press 'Enter'.
- To reorder tasks, simply click, hold, and drag the task to its new position.
- To add an image to a task, click on the 'Upload Image' button on the task.
- To set a due date for a task, click on the date field on the task and choose a date.

Please note that the changes you make are not saved in a database in this version, so your changes will not persist if the server is restarted.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
