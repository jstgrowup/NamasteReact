# How do we create nested routes react router dom configuration
```
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/about',
                element: <About />,
                children: [
                    {
                        path: 'profile', // will work like: localhost:1234/about/profile
                        element: <Profile />
                    }
                ]
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restaurant/:id',
                element: <RestaurantDetails />
            }
        ]
    }
])
```
# Read about createHashRouter, createMemoryRouter from react router docs
 - createMemoryRouter: If you require running React router in a non-browser environment then this can help us manage a history stack in memory, Instead of using the browsers history a memory router manages it for us. Read: https://reactrouter.com/en/main/routers/create-memory-router

createHashRouter: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".

On why it's not a recommended approach: is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.