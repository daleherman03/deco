import { createHashRouter } from "react-router-dom";
import App from './App';
import { Home } from './components/Home/home';
import { Gallery } from './components/Gallery/gallery';
import { Testimonials } from './components/Testimonials/testimonials';
import { Contact } from './components/Contact/contact'


const Router = createHashRouter ([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/reviews/',
                element: <Testimonials />
            },
            // {
            //     path: '/gallery/',
            //     element: <Gallery />
            // },
            {
                path: '/contact/',
                element: <Contact />
            }
        ]
}])

export default Router;