export async function SaveData(title, subtitle, used, footer) {
    const endpoint = 'http://192.168.100.8:3000/db';
    try {
        const result = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(title, subtitle, used, footer)
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
