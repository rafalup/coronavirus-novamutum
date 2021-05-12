import React from 'react';
import useForm from "./hooks/useForm";


import "./css/estilo.css";
/* import "./teste.css"; */
const Contact = () => {
    const [{ values, loading }, handleChange, handleSubmit] = useForm();

    const enviarContato = () => {
        // faça o que for preciso :)
        console.log(values);

    };

    return (
        <div className="container-contact">

            <div className="column-66">

                <form className="form-contact" onSubmit={handleSubmit(enviarContato)}>
                    <h1>Entre em contato 📩</h1>

                    <input
                        onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Digite o seu nome"
                    />
                    <input
                        onChange={handleChange}
                        type="text"
                        name="email"
                        placeholder="Digite o seu e-mail"
                    />
                

                    <textarea
                        onChange={handleChange}
                        type="text"
                        name="message"
                        placeholder="Informe sua mensagem ..."
                        /* value={this.state.textAreaValue}
                        onChange={this.handleChange} */
                        rows={7}
                        cols={7}
                    /> 


                    <button type="submit">{loading ? "Enviando..." : "Enviar"}</button>
                </form>
            </div>



        </div>
    )
};

export default Contact;