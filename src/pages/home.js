import React, { lazy } from 'react';

const Slider_Home = lazy(() => import('../components/slider_home'));
const Call_To_Action = lazy(() => import('../components/call_to_action'));

function Home() {
    return (
        <div className="container-fluid p-0">
            <Slider_Home />
            <div className="container py-5">
                <h1 className='fuente_especial display-1 text-center pt-4'>Nuestra Filosofía</h1>
                <p>
                    Trabajar con masa es como trabajar con un ser vivo. Tiene malos y buenos días, es temperamental y algunas veces no quiere cooperar. Es por eso que nuestra filosofía está basada en la simplicidad, donde menos, es más. Nuestros ingredientes hablan por si solos. Todo esto combinado a una masa elástica, crocante por fuera y suave por dentro, la cual funciona como perfecto vehículo para nuestros toppings premium.
                </p>
            </div>
            <div className="preparacion row g-0 py-5">
                <div className="col-lg-6 offset-lg-6 py-5">
                    <p>
                        La simplicidad es importante, ya que cada uno de nuestros platillos esta pensado en un ingrediente estrella, donde al ser complementado con sabores simples pero determinantes, forman una armonía de sensaciones una vez que se unen todos en nuestro paladar. Para lograr armonizar cada una de nuestras creaciones, es importante entender nuestros ingredientes.
                    </p>

                </div>
            </div>
            <div className="calzone_home">
                <div className="col-lg-4 offset-lg-4">
                    <p className="p_bg_trans py-5 ">
                        <p>
                            Nuestra filosofía nos permite llegar a un nivel de conexión con nuestros productores que nos deja saber exactamente los estándares de preparación, crecimiento y producción a los cuales se someten nuestros ingredientes estrella. Esta estrecha relación entre los productores y nuestro restaurante nos permite llevarle a usted, nuestro cliente, nada menos que lo mejor desde la granja hasta su mesa.
                        </p>
                    </p>
                </div>
            </div>
            <Call_To_Action />
        </div>
    )
}
export default Home