import { Link } from "react-router-dom";

export function ItemContainer({ item }) {
    return (
        <Link
            to={`/item/${item.id}`}
            className="block p-4 my-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer"
            aria-label={`Ver detalles de ${item.name}`}
        >
            <div className="flex flex-col items-center m-8">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48  rounded-md mb-4"
                />
                <h3 className="text-sm font-medium text-gray-700 mb-1">{item.category}</h3>
                <h1 className="text-lg font-semibold mb-2 text-gray-800">{item.name}</h1>
                <p className="text-md font-bold mb-2">${item.price.toFixed(2)}</p>
                <button
                    className="px-4 py-2 border border-transparent bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label={`Ver detalle de ${item.name}`}
                >
                    Ver detalle
                </button>
            </div>
        </Link>
    );
}
