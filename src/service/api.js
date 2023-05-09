import axios from 'axios';

const API_KEY = 'aSmSkiWObcQOoiWQddKqb6';
axios.defaults.baseURL = "https://quintadb.com.ua";
const databaseName = 'database';
const formName = 'notice';

const getDatabase = () => {
    const database = JSON.parse(localStorage.getItem('db'));
    return database
};

const { database_id, form_id } = getDatabase()


export const createTable = async () => {
    const database = getDatabase()
    if (database) {
        console.log(`Database ID ${database.database_id} loaded from localStorage.`);
        return database;
    }
    try {
        const response = await axios({
            method: 'post',
            url: `/apps.json`,
            data: { rest_api_key: API_KEY, database_name: databaseName, form_name: formName }
        });
        const database_id = response.data.databases[0].id;
        const form_id = response.data.databases[1].id;
        localStorage.setItem('db', JSON.stringify({ database_id, form_id }));
    } catch (error) {
        console.error('Failed to create table.');
        throw error;
    }
};

export const getAllNotes = async () => {
    try {
        const response = await axios({
            method: 'GET',
            url: `/apps/${database_id}/entities/${form_id}/properties.json?rest_api_key=${API_KEY}`,
        });
        return response.data.fields
    } catch (error) {
        console.error('Failed to get all notes.');
        throw error;
    }
};

export const createNote = async () => {
    try {
        const response = await axios({
            method: 'POST',
            url: `/apps/${database_id}/entities/${form_id}/properties.json?rest_api_key=${API_KEY}`,
            data: { name: 'New note', type_name: "string", desc: '' }
        });
        return response.data.field
    } catch (error) {
        console.error('Failed to create note.');
        throw error;
    }
};

export const deleteNote = async (id) => {
    try {
        await axios({
            method: 'DELETE',
            url: `/apps/${database_id}/entities/${form_id}/properties/${id}.json?rest_api_key=${API_KEY}`,
        });
    } catch (error) {
        console.error('Failed to delete note.');
        throw error;
    }
};
export const updateNote = async (id, name, desc) => {
    try {
        const response = await axios({
            method: 'PUT',
            url: `/apps/${database_id}/entities/${form_id}/properties/${id}.json?rest_api_key=${API_KEY}`,
            data: { name, desc }
        });
        console.log('response', response)
        return response.data.field
    } catch (error) {
        console.error('Failed to delete note.');
        throw error;
    }
};




