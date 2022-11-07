export async function getCustomers(){
    const response = await fetch(import.meta.env.VITE_API_URL);
    const result = await response.json();
    return result;
}
export async function getClient(id){
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const result = await response.json();
    return result;
}
export async function addClient(datos){
    try{
        const response = await fetch(import.meta.env.VITE_API_URL,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {'Content-Type': 'application/json'}
        })
        await response.json();
    }catch(err){
        console.log(datos);

    }
}


export async function updateClient(id, datos){
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {'Content-Type': 'application/json'}
        })
        await response.json();
    }catch(err){
        console.log(datos);

    }
}

export async function deleteClient(id){
    try{
        const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{
            method: 'DELETE'
        })
        await response.json();
    }catch(err){
        console.log(datos);

    }
}