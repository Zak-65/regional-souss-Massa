export default function Affiche({ produits }) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-20 ">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Refrence 
            </th>
            <th scope="col" className="px-6 py-3">
              Nom Produit
            </th>
            <th scope="col" className="px-6 py-3 bg-gray-50">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              prix
            </th>
            <th scope="col" className="px-6 py-3">
              categorie
            </th>
            <th scope="col" className="px-6 py-3">
              image
            </th>
          </tr>
        </thead>
        <tbody>
          {produits.map((produit) => {
            return (
              <tr className="border-b border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50">
                  {produit.reference}
                </th>
                <td className="px-6 py-4">{produit.name}</td>
                <td className="px-6 py-4 bg-gray-50">{produit.description}</td>
                <td className="px-6 py-4">{produit.price}</td>
                <td className="px-6 py-4">{produit.category}</td>
                <td className="px-6 py-4"><img className="w-12" src={produit.image} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
