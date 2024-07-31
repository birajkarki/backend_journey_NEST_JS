import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {

    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
        
        return messages[id] || null; // Return null if the message with the given id is not found
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
      
        return Object.values(messages); // Return all messages as an array
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
       
        const id = Math.floor(Math.random() * 999).toString(); // Ensure id is a string
        messages[id] = { id: parseInt(id), content }; // Add new message with id
        await writeFile('messages.json', JSON.stringify(messages, null, 2)); // Format the JSON for readability
    }
}
