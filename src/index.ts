import app from "./app";
import { connect } from "./database";

app.listen(app.get("port"), async () => {
	connect();
	console.log(`Server on port ${app.get("port")}`);
});
