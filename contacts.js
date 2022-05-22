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

async function addContact(name, email, phone) {
	const contacts = await listContacts();
	const newContact = { id: 0, name, email, phone };
	const contactsList = [...contacts, newContact].map(
		({ name, email, phone }, index) => ({
			id: `${index + 1}`,
			name,
			email,
			phone,
		})
	);

	try {
		await fs.writeFile(contactsPath, JSON.stringify(contactsList));
	} catch (err) {
		err.message = "addContact error";
		throw new Error(err.message);
	}
}

async function getContactById(contactId) {
	try {
		const data = await fs.readFile(contactsPath);
		const result = JSON.parse(data).filter((el) => el.id === contactId);
		return result;
	} catch (err) {
		err.message = "getContactById error";
		throw new Error(err.message);
	}
}

async function removeContact(contactId) {
	const contacts = await listContacts();

	if (contacts.findIndex((el) => el.id === contactId) === -1) {
		return console.log("Unable to remove non-exist contactId");
	}

	const contactsList = [...contacts].filter(({ id }) => id !== contactId);

	try {
		await fs.writeFile(contactsPath, JSON.stringify(contactsList));
		return console.log("contactId removed");
	} catch (err) {
		err.message = "removeContact error";
		throw new Error(err.message);
	}
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
};
