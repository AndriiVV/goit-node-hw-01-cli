const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
	try {
		const data = await fs.readFile(contactsPath);
		const result = JSON.parse(data);
		console.table(result);
	} catch (err) {
		console.log(err.message);
	}
}

function getContactById(contactId) {
	// ...твой код
}

function removeContact(contactId) {
	// ...твой код
}

function addContact(name, email, phone) {
	// ...твой код
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
