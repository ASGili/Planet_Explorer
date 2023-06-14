# Planet Explorer
Group Project: Angel, Sam, Hanna, Aric.

## Dataset
Seeds data comes from https://www.kaggle.com/datasets/iamsouravbanerjee/planet-dataset and pictures come separately.

## Step-by-Step for downloading and running our app on your local machine


Requirements:
- Node.js and npm (Node Package Manager) should be installed on your machine. You can download them from the official Node.js website: https://nodejs.org.

<u>Clone the project</u>
- Open a terminal or command prompt.
- Change to the directory where you want to store the project.
- Clone the project repository by running the following command:

```
git clone <repository_url>
```

<u>Install dependencies</u>
- Navigate to the project's root directory in the terminal.
- Install the required dependencies for the server-side (Express):

```
cd server
npm install
```

- Once the server dependencies are installed, navigate to the client directory by running the following command:

```
cd ../client
```

- Run the following command to install the required dependencies for the client-side (React):

```
npm install
```

- If you have MongoDB installed - Start MongoDB 

    If MongoDB is not already installed and you would like to install it then you may install the MongoDB Community Server from the official MongoDB website based on your operating system:

    For Windows: https://www.mongodb.com/try/download/community
    For macOS: https://www.mongodb.com/try/download/community
    For Linux: Refer to the official MongoDB documentation for instructions specific to your distribution: https://docs.mongodb.com/manual/administration/install-on-linux/

    Once MongoDB is installed, start the MongoDB service by running the appropriate command for your operating system:

    For Windows: Run mongod command.
    For macOS or Linux: Run sudo service mongod start command. (If MongoDB is installed as a service, it may already be running automatically.)

- If you MongoDB is not installed and you do not wish to install. Configure the MongoDB connection 

    Create a MongoDB Atlas account if you don't have one already: https://www.mongodb.com/cloud/atlas
    Set up a new MongoDB cluster and obtain the connection string. Make sure to whitelist your IP address in the MongoDB Atlas settings.
    In the server directory, create a file named .env.
    Open the .env file and add the following line, replacing <connection_string> with your actual MongoDB connection string:
    makefile

```
MONGODB_URI=<connection_string>
```

<u>Start the server and client</u>
- Open two separate terminal or command prompt windows.
- In the first window, navigate to the server directory:

```
cd <path_to_project>/server
```

- Run the following command to start the server:

```
npm start
```

- In the second window, navigate to the client directory:

```
cd <path_to_project>/client
```

- Run the following command to start the React client:

```
npm start
```

<u> Accessing the app</u>
- Open a web browser and go to `http://localhost:3000`.
- You should see the React app running, connected to the Express server.
- You can now interact with the app locally.

### You have now successfully set up and run our React Express MongoDB app on your local machine. 
