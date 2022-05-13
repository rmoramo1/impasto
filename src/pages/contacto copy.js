import React, { useState } from 'react';
import { send } from 'emailjs-com';

function Contacto() {

    const [toSend, setToSend] = useState({
        fullname: '',
        email: '',
        message: '',
        phone: '',
    });

    const contact = (e) => {
        e.preventDefault();
        send(
            'service_5ihc1yh',
            'template_wxz9lki',
            toSend,
            'user_ueDJqGkpi3yp8nodYgnsk'
        )
            .then((response) => {
                alert("The form was sent correctly");
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                alert("The form was not submitted correctly");
                console.log('FAILED...', err);
            });
        e.target.reset()
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    return (
        <div className="container-fluid p-0 contacto d-flex justify-content-center align-items-center">
            <div className="col-lg-10 offset-lg-1 bg_brown_trans py-5 ">
                <div className="col-lg-12">
                    <form onSubmit="contact" className="formContact bg-contact text-uppercase">
                        <div className="row g-0">
                            <div className="col-12 offset-xl-3 col-xl-6 py-2">
                                <input className="col-12" name="fullname" id="fullname" type="text" placeholder="Nombre" aria-label="fullname" value={toSend.fullname} onChange={handleChange} required />
                            </div>
                            <div className="col-12 offset-xl-3 col-xl-6 py-2">
                                <input className="col-12" name="phone" id="phone" type="number" placeholder="Teléfono" aria-label="phone" value={toSend.phone} onChange={handleChange} required />
                            </div>
                            <div className="col-12 offset-xl-3 col-xl-6 py-2">
                                <input className="col-12" name="email" id="emailAddress" type="mail" placeholder="Email" aria-label="emailAddress" value={toSend.email} onChange={handleChange} required />
                            </div>
                            <div className="col-12 offset-xl-3 col-xl-6 py-2">
                                <textarea className="col-12" id="message" name="message" rows="5" placeholder="Mensaje"></textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btnYellow btn" type="submit">Enviar <i className="bi bi-arrow-right"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Contacto;