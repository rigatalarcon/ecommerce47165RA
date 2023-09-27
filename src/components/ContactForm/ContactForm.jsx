import { Form } from "formik";
import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";


const ContactForm = ({createOrder}) => { 

    const [ formularioEnviado, cambiarFormularioEnviado] = useState(false)
    return (
        <>
            <Formik
                initialValues={{
                    nombre: 'nombre',
                    telefono: 'telefono',
                    correo: 'correo'
                }}
                validate={(valores) => {
                    let errores = {};

                    if (!valores.nombre) {
                        errores.nombre = 'por favor ingresa un nombre'
                    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                        errores.nombre = 'el nombre solo puede contener letras y espacio'
                    }

                    if (!valores.telefono) {
                        errores.telefono = 'por favor ingresa un telefono'
                    } else if (!/^[0-9]+$/.test(valores.telefono)) {
                        errores.telefono = 'el telefono solo puede contener numeros'
                    }

                    if (!valores.correo) {
                        errores.correo = 'por favor ingresa un correo electronico'
                    } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)) {
                        errores.correo = 'el correo puede contener letras, numeros y caracteres especiales'
                    }
                    return errores;
                }}

                onSubmit={(valores, { resetForm }) => {
                    createOrder(valores)
                    resetForm();
                    alert('formulario enviado')
                    cambiarFormularioEnviado(true)
                    setTimeout(() => cambiarFormularioEnviado(false), 5000);
                }}
            >
                {({ errors }) => (
                    <Form className="ContactForm">

                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <Field
                                type="text"
                                id="nombre"
                                name="nombre"
                                placeholder="ingresa nombre"
                            />
                            <ErrorMessage name="nombre" component={() => (
                                <div className="error">{errors.nombre}</div>
                            )} />

                        </div>
                        <div>
                            <label htmlFor="telefono">Telefono</label>
                            <Field
                                type="numero"
                                id="telefono"
                                name="telefono"
                                placeholder="ingresa un telefono"
                            />
                            <ErrorMessage name="telefono" component={() => (
                                <div className="error">{errors.telefono}</div>
                            )} />

                        </div>
                        <div>
                            <label htmlFor="correo">Email</label>
                            <Field
                                type="email"
                                id="correo"
                                name="correo"
                                placeholder="ingresa un correo"
                            />
                            <ErrorMessage name="correo" component={() => (
                                <div className="error">{errors.correo}</div>
                            )} />
                        </div>

                        <button type="submit">Enviar</button>
                        
                        {formularioEnviado && <p className="exito">Formulario enviado con Exito</p>}
                    </Form>)}
            </Formik>
        </>
    )
}

export default ContactForm