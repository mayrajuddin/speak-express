import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Premium from "../../Pages/Premium/Premium";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://speak-express-server.vercel.app/languagedata')
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'faq',
                element: <Faq></Faq>
            },
            {
                path: 'courseDetails/:id',
                loader: async ({ params }) => {
                    return fetch(`https://speak-express-server.vercel.app/languagedata/${params.id}`)
                },
                element: <CourseDetails></CourseDetails>,
            },
            {
                path: 'premium',
                element: <PrivateRoute> <Premium></Premium> </PrivateRoute>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <Error></Error>
    }
])