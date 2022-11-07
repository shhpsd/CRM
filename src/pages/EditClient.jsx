import { Form, useNavigate, useLoaderData, useActionData,redirect } from "react-router-dom";
import { getClient, updateClient } from "../data/customer";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const client = await getClient(params.clientId);

  if (Object.values(client).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Client not found",
    });
  }
  return client;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  // Validation
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("All fills los campos son obligatorios");
  }
  // Expression Regular
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errores.push("email not valid");
  }
  // Retorna datos si hay errores en el formulario
  if (Object.keys(errores).length) {
    return errores;
  }
  //  Actualizar cliente
  await updateClient(params.clientId,datos);
  return redirect("/");
}

function EditClient() {
  const navigate = useNavigate();
  const client = useLoaderData();
  const errores = useActionData();
  
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Edit Client</h1>
      <p className="mt-3">Fill the inputs to edit the client</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Return
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form method="post" noValidate>
          <Formulario client={client} />
          <input
            className="mt-5 w-full bg-blue-800 text-white p-3 font-bold text-lg uppercase cursor-pointer"
            type="submit"
            value="Save"
          />
        </Form>
      </div>
    </>
  );
}

export default EditClient;
