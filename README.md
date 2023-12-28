# NodeJs-01
A code repo for node js backend

Step 1- Create new folder for node js.

Step 2- Open cmd on new folder's destination and excute the 1st and 4th to 9th commands.

Step 3- Open package.json file in code editor to check the above required dependencies listed there with the respective versions.

Step 4- Create server.js file.

Step 5- Create folder database and sub-file as db.js .

Step 6- Open terminal/cmd and excute the 10th command.


<!-- About Modules -->

# Nodemon
A utility for Node.js that monitors for changes in files in a Node.js application and automatically restarts the server when changes are detected. It is particularly useful during the development phase, as it eliminates the need to manually stop and restart the server every time a code change is made.

# Mongoose
A popular object data modeling (ODM) library for MongoDB and Node.js. MongoDB is a NoSQL database, and Mongoose provides a way to model data for MongoDB, making it easier to work with MongoDB databases in a Node.js environment. It includes features for defining schemas, creating models, and performing CRUD (Create, Read, Update, Delete) operations.
Link: https://mongoosejs.com/

# CORS
Stands for Cross-Origin Resource Sharing. It is a security feature implemented by web browsers to control how web pages in one domain can request and interact with resources from another domain. The same-origin policy is a security measure that restricts web pages from making requests to a different domain than the one that served the original web page.

CORS is designed to enable secure cross-origin data transfers in web browsers. When a web page makes a cross-origin HTTP request (e.g., an AJAX request) to a different domain, the browser typically blocks the request for security reasons. CORS provides a mechanism for servers to specify which origins are permitted to access their resources.

# body-parser
A middleware for handling incoming HTTP request bodies in Express.js, a popular web framework for Node.js. In versions of Express.js prior to v4.16.0, body-parser was included as part of the Express.js package. However, starting from v4.16.0, Express.js no longer depends on body-parser, and it needs to be installed separately if you want to use it.

The main purpose of body-parser is to parse the request body and make it available under the req.body property in your Express.js routes. It supports various formats, such as JSON and URL-encoded data.

# Express.js
A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It is designed to make it easier to build web applications and APIs by providing a simple, unopinionated framework.

Express is widely used in the Node.js community for building web servers, APIs, and full-stack web applications.

# Promise
An object in JavaScript that represents the eventual completion or failure of an asynchronous operation and its resulting value. Promises are a way to handle asynchronous code more cleanly and avoid "callback hell" or the pyramid of doom, where multiple nested callbacks can make code hard to read and maintain.

A Promise can be in one of three states:

1. Pending: The initial state; the promise is neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully, and the promise has a resulting value.
3. Rejected: The operation failed, and the promise has a reason for the failure.