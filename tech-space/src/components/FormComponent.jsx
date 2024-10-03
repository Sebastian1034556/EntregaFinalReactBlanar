import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

export function FormComponent({ setOrderConfirmed }){
    const MySwal = withReactContent(Swal);
    const [, , , , , , clearCart] = useContext(CartContext)
    const navigate = useNavigate()

    const showSuccessAlert = () => {
        MySwal.fire({
            title: <p>Su pedido se ha realizado con éxito!</p>,
            icon: 'success',
        }).then(() => {
            clearCart();
            setOrderConfirmed(true);
            navigate("/");
        });
    };

    const { register,handleSubmit,
        formState: { errors } 
        } = useForm()

    const onSubmit = handleSubmit(showSuccessAlert)
    return(
            <form onSubmit={onSubmit} >
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-2">Nombre completo</label>
                    <input 
                        type="text" 
                        id="name" 
                        className="border rounded-lg w-full p-2" 
                        {... register("name",{
                            required :{
                                value : true,
                                message : "El campo nombre es obligatorio"
                            },
                            minLength : {
                                value : 5,
                                message : "El nombre debe contener al menos 5 caractéres"
                            },
                            maxLength : {
                                value : 50,
                                message : "El nombre no puede contener más de 50 caractéres"
                            },
                            pattern : {
                                value : /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúñÑ]+)+$/,
                                message: "El nombre no es válido"
                            }
                        })}
                    />
                </div>
                { errors.name && <span className='text-red-500'>{errors.name.message}</span> } 

                <div className="mb-4 my-4">
                    <label htmlFor="email" className="block mb-2">Correo Electrónico</label>
                    <input 
                        type="text" 
                        id="email" 
                        className="border rounded-lg w-full p-2" 
                        {... register("email",{
                            required : {
                                value : true,
                                message: "El campo email es obligatorio"
                            },
                            pattern : {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ ,
                                message : "El correo no es válido"
                            }
                        })}
                    />
                </div>
                {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

                <div className="mb-4 my-4">
                    <label htmlFor="address" className="block mb-2">Dirección</label>
                    <input 
                        type="text" 
                        id="address" 
                        className="border rounded-lg w-full p-2" 
                        {... register("address",{
                            required : {
                                value : true ,
                                message : "El campo dirección es obligatorio"
                            },
                            pattern: {
                                value: /^[A-Za-zÁÉÍÓÚáéíóúñÑ0-9\s.,#\-]+$/,
                                message: "Dirección no válida"
                            },
                            minLength: {
                                value: 5,
                                message: "La dirección debe tener al menos 5 caracteres"
                            },
                            maxLength: {
                                value: 100,
                                message: "La dirección no puede tener más de 100 caracteres"
                            }
                        })}
                    />
                </div>
                {errors.address && <span className=' text-red-500'>{errors.address.message}</span> }

                <button type="submit" className="block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 my-4">
                    Realizar pedido
                </button>
            </form>

    )
}