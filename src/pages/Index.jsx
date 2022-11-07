
import {useLoaderData} from 'react-router-dom'
import {getCustomers} from '../data/customer'
import Client from '../components/Client'


export function loader(){
  const customers = getCustomers();
  return customers;
}
function Index() {
// CUANDO QUIERO OBTENER DATOS DE UN LOADER
  const customersData = useLoaderData();

  return (
    <>
        <h1 className='font-black text-4xl text-blue-900'>Customers</h1>
        <p className="mt-3">Manage your Customers</p>
    
      {customersData.length ? (

        <table className='w-full bg-white shadow mt-5 table-auto'>
          <thead className='bg-blue-800 text-white'>
            <tr>
              <th className='p-2'>Client</th>
              <th className='p-2'>Contact</th>
              <th className='p-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map(client =>(
              <Client
                client={client}
                key={client.id}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center">No hay ningun cliente</p>
        )
      }
    </>
  )
}

export default Index