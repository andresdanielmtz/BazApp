export async function SaveData(title, subtitle, used, img, footer) {
    
    const endpoint = "http://10.41.53.7:3000/db"; 
    // ramon: 
    // const endpoint = 'http://192.168.100.8:3000/db';

    // Andres 
    // const endpoint = 'http://192.168.1.65:3000/db';
    
    
    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(title, subtitle, used, img, footer)
        });

        if (result.ok) {
            console.warn('Data is added');
        } else {
            console.error('Failed to add data. HTTP status code:', result.status);
        }
    } catch (error) {
        console.error('An error occurred while saving data:', error);
    }
}
