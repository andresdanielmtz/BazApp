export async function DeleteData(id) {
    
    const endpoint = `http://10.41.32.84:3000/db/${id}`; 
    // ramon: 
    // const endpoint = 'http://192.168.100.8:3000/db';
    // const endpoint = 'http://192.168.104.69:3000/db';

    // Andres 
    // const endpoint = 'http://192.168.1.65:3000/db';

    console.warn(endpoint);
    
    try {
        const result = await fetch(endpoint, {
            method: 'DELETE',
        });

        if (result.ok) {
            console.warn(`Data with ID ${id} is deleted`);
        } else {
            console.error('Failed to delete data. HTTP status code:', result.status);
        }
    } catch (error) {
        console.error('An error occurred while deleting data:', error);
    }
}
