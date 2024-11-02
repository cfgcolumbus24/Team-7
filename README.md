# Team 7: AskDB
## Setup Instructions
```
cd Project/client
npm i
cd ../server
npm i
```
Create a file `.env` in the server directory with the following fields populated:
```
PORT=5001
GEMINI_KEY=
MONGODB_URI=
```

## Running Instructions
In one terminal window:
```
cd Project/client
npm run dev
```
In another
```
cd Project/server
node app.js
```
Enter the URL provided by the client component (usually localhost:5471)