import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";
import { addClient } from "../data/customer";
export async function action({ request }) {
  // Obtencion de datos del formulario
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  const email = formData.get("email");

  // Validation
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }
  // Expression Regular 
  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
    if(!regex.test(email)){
      errores.push("El email no es valido");
    }
  // Retorna datos si hay errores en el formulario
  if (Object.keys(errores).length) {
    return errores;
  }
  console.log(datos);
  await addClient(datos);
  return redirect('/');
}
function NewClient() {
  const errores = useActionData();
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Fill the inputs to register a client</p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate("/")}
        >
          Return
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}
        <Form 
          method="post"
          noValidate
        >
          <Formulario />
          <input
            className="mt-5 w-full bg-blue-800 text-white p-3 font-bold text-lg uppercase cursor-pointer"
            type="submit"
            value="Regist new client"
          />
        </Form>
      </div>
    </div>
  );
}

export default NewClient;
