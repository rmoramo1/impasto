import React, { useState } from 'react';
import { send } from 'emailjs-com';

function Call_To_Action() {
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
        <div className="container-fluid bg_brown py-5">
            <div className="row g-0">
                <div className="col-lg-6">
                <div className="bgCardsContact"></div>
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
                <div className="col-lg-6 py-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d694.5891106627328!2d-84.1143316619751!3d10.001211686635935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb3b49790fe7%3A0xc5076df9603e6063!2sPizza%20Impasto!5e0!3m2!1ses!2scr!4v1645635529123!5m2!1ses!2scr" width="100%" height="250"  allowfullscreen="" loading="lazy" async></iframe>
                </div>
            </div>
        </div>
    )
}
export default Call_To_Action;