import { useState } from "react";

export default function IndfoProd() {
  const [produit, setProduit] = useState([]);
  let [validation,setValidation] = useState(false);

  return (
    <div className="flex justify-evenly items-center px-16 py-16">
      <div className="max-w-md mx-7 my-14 bg-[#003161] px-7 py-7 rounded-md">
        <div className="relative z-0 w-full mb-5 group">
          <input
            onChange={(e) => setProduit({ ...produit, id: e.target.value })}
            type="text"
            name="Reference"
            id="Reference"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="Reference"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Reference
          </label>
        </div>
        {/* Product Name Input */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            onChange={(e) => setProduit({ ...produit, nomP: e.target.value })}
            name="nomProduit"
            id="nomProduit"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="nomProduit"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Nom du Produit
          </label>
        </div>

        {/* Category Select */}
        <div className="relative z-0 w-full mb-5 group">
          <select
            onChange={(e) => setProduit({ ...produit, categorie: e.target.value })}
            name="categorieProduit"
            id="categorieProduit"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
          >
            <option value="" disabled selected>
              Choisissez une catégorie
            </option>
            <option value="categorie1">Catégorie 1</option>
            <option value="categorie2">Catégorie 2</option>
            <option value="categorie3">Catégorie 3</option>
          </select>
          <label
            htmlFor="categorieProduit"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Catégorie
          </label>
        </div>

        {/* Description Textarea */}
        <div className="relative z-0 w-full mb-5 group">
          <textarea
            onChange={(e) => setProduit({ ...produit, descP: e.target.value })}
            name="descriptionProduit"
            id="descriptionProduit"
            rows="4"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          ></textarea>
          <label
            htmlFor="descriptionProduit"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Description
          </label>
        </div>

        {/* Price Input */}
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            onChange={(e) => setProduit({ ...produit, prix: e.target.value })}
            name="inputPrix"
            id="inputPrix"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="inputPrix"
            className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Prix
          </label>
        </div>

        {/* Image Input */}
        <div className="relative z-0 w-full mb-5 group">
          <input type="file" onChange={(e) => setProduit({ ...produit, image: e.target.value })} name="imageProduit" id="imageProduit" className="block w-full text-sm text-black border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:border-blue-600" required />
        </div>

        {/* Submit Button */}
        <button onClick={()=>setValidation(true)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">
          Valider
        </button>
      </div>
      {validation && (
        <ul className="list-disc w-96">
          <h1 className="font-bold text-xl text-start">Information Produit :</h1>
          <li className="ml-10">{produit.id}</li>
          <li className="ml-10">{produit.nomP}</li>
          <li className="ml-10">{produit.categorie}</li>
          <li className="ml-10">{produit.prix}</li>
          <li className="ml-10">{produit.image}</li>
        </ul>
      )}
    </div>
  );
}
