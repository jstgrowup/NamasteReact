# what are various ways to add images into our App? Explain with code exmples

-

# How will useEffect behave if we dont add a dependency array?

- if we dont add a dependency array than useeffect will run after every small render in the component and it will ultimately make our app slow
# What is SPA?
- SPA stands for single page application.react is a single page application is a web app that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server 
- the goal is to provide a smootehr and more responsive user experienceby updating the content dynamically as the user interacts with the application  
# What is defference between Client side routing and server side routing ?
- Client-Side Routing:
Routing Logic on the Client:

In client-side routing, the logic for handling navigation and route changes is executed on the client-side (in the browser).
JavaScript frameworks and libraries, such as React Router, Vue Router, or Angular Router, often facilitate client-side routing in single-page applications (SPAs).
Single Page Application (SPA):

Client-side routing is closely associated with SPAs, where the entire application is loaded initially, and subsequent navigation and content updates are handled dynamically without full page reloads.
Fast and Responsive:

Client-side routing provides a fast and responsive user experience. Once the initial application is loaded, subsequent page transitions are quick because only the necessary components and data are fetched and updated.
Smooth Transitions:

Navigation between pages in a client-side routing setup typically involves smooth transitions and animations, enhancing the overall user experience.
SEO Challenges:

Client-side routing may face challenges related to search engine optimization (SEO) since search engine crawlers may not execute JavaScript and might not easily index the content rendered dynamically.
Server-Side Routing:
Routing Logic on the Server:

In server-side routing, the logic for handling navigation and route changes is executed on the server.
Traditional server-side frameworks, such as Express.js (Node.js), Django (Python), or Ruby on Rails (Ruby), often handle server-side routing.
Page Reloads:

In server-side routing, each navigation typically results in a request to the server for a new page. The server sends back the entire HTML for the requested page, leading to a full page reload.
SEO-Friendly:

Server-side routing is considered more SEO-friendly because each page is a separate entity with its own URL, making it easier for search engines to index and rank the content.
Slower Transitions:

Page transitions in server-side routing may be slower compared to client-side routing because each navigation involves a round-trip to the server.
Traditional Multi-Page Application (MPA):

Server-side routing is often associated with traditional multi-page applications (MPAs), where each page is a separate HTML document.