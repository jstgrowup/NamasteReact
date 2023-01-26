## What are the different ways to add images into our App? 
- There are basically two ways to add images into our app 
  - Via CDN
  ```
  <img src="img.png" alt="image not available"/>
  ```
  - Via import 
    - If we have the image in our system than we can directly use default import 
    ```
    import image from "/path/of/image";
    ...
    <img src={image} />
    ```
## What will happen if we do console.log(useState())?
- It will return us an array which will have two values the first one will be the default value and the second will be the function that is also known as the updater function
- the first value will be undefined if dont provide any default values 
## How will the useEffect behave if we dont add anything in the dependency?
- if we do not provide a dependency array in use state , the useEffect hook will bee called at each re-render of the component.
## What is SPA?
- SPA stands for Single Page application
- A SPA is a single page application that uses client side rendering to load the pages. A SPA does not require to call the server end for rendering the application or switching the pages.
## What is the difference between Client side routing and Server side routing?
- A Client side Routing is a type of routing where the routing occurs at the client without making any calls to server side. To swich between different pages in an aplication the application is not required to make any sever side call to show the pages, since the page is already present on the clinet side.
- In cleint side routing the apllication is loaded first time from client server, but wherever we 
jump to diffrent menu like about page the brouser again make HTTP request to fetch about page and then re-render the
complete application again which inturn require some time and thus this process is expensive as well as time consuming.
- A server side routing is a type os routing where the application needs to call for the resources ffrom the server side.
