import app from '@main/App';

const SERVER_PORT = 3333;
const HOST = 'http://localhost';

app.listen(SERVER_PORT, () => {
	return console.log(`Server listening on: ${HOST}:${SERVER_PORT}`);
});
