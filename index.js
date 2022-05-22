const { listContacts } = require("./contacts");

listContacts().then((res) => console.table(res));
