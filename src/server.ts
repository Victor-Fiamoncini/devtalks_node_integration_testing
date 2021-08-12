import app from '@main/App';

const SERVER_PORT = 3333;

app.listen(SERVER_PORT, () => {
	return console.log(`Server listening on: ${SERVER_PORT}`);
});
