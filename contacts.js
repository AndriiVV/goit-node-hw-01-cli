const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "./db/contacts.json");

async function listContacts() {
	try {
		const data = await fs.readFile(contactsPath);
		const result = JSON.parse(data);
		return result;
	} catch (err) {
		err.message = "listContacts error";
		throw new Error(err.message);
	}
}

async function getContactById(contactId) {
	// ...твой код
}

async function removeContact(contactId) {
	// ...твой код
}

async function addContact(name, email, phone) {
	// ...твой код
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
