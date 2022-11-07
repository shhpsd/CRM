import { useNavigate, Form, redirect } from "react-router-dom";
import { deleteClient } from "../data/customer";

export async function action({ params }) {
  await deleteClient(params.clientId);
  return redirect("/");
}

function Client({ client }) {
  const navigate = useNavigate();
  const { name, company, email, telefon, id } = client;
  return (
    <tr className="border-b">
      <td className="p-6">
        <p className="text-2xl text-gray-800">{name}</p>
        <p className="mt-2">{company}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Email: </span>
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">Tel: </span>
          {telefon}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
          type="button"
          onClick={() => navigate(`/customers/${id}/edit`)}
        >
          Edit
        </button>
        <Form
          method="post"
          action={`/customers/${id}/destroy`}
          onSubmit={(e) => {
            if (!confirm("Are you sure you want to delete")) {
              e.preventDefault();
            }
          }}
        >
          <button
            className="text-red-600 hover:text-red-700 uppercase font-bold text-xs"
            type="submit"
          >
            Delete
          </button>
        </Form>
      </td>
    </tr>
  );
}
export default Client;
