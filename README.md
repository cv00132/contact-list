**Contact List API w7d3
----
*Learning Objectives
 - Demonstrate an ability to create Models and Migrations
 - Demonstrate an understanding of Routes and Controllers
 - Demonstrate an ability to document API endpoints

* **Method:**

  <_The request type_>

  `GET` | `POST` | `DELETE` | `PUT`

*  **URL Params**

`GET`
    To get one contact from the list use:

 `http://localhost:8000/contacts/:id`


* **Success Response:**

  <_What should the status code be on success and is there any returned data?_>

  * **Code:** 200 <br />
    **Content:** `{
    "id": 1,
    "name": "Cory",
    "phone": "123-456-7890",
    "city": null,
    "state": null,
    "photo_url": null,
    "email": null,
    "createdAt": "2017-03-09T19:29:30.375Z",
    "updatedAt": "2017-03-09T19:29:30.375Z"
  }`

* **Error Response:**

  <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc._>

  * **Code:** 400 ERROR <br />
    **Content:** `{ error }`


  `DELETE`
      To delete one contact from the list use:

   `http://localhost:8000/contacts/:id`

  * **Success Response:**

    <_What should the status code be on success and is there any returned data?_>

    * **Code:** 200 <br />
      **Content:**
      ` {
  "message": "Contact successfully deleted"
} `

  * **Error Response:**

    <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc._>

    * **Code:** 400 ERROR <br />
      **Content:** `{ error }`


    `PUT`
      To get update contact from the list use:

   `http://localhost:8000/contacts/:id`

  * **Success Response:**

    <_What should the status code be on success and is there any returned data?_>

    * **Code:** 200 <br />
      **Content:**
      ` {
      "id": 1,
      "name": "Cory",
      "phone": "123-456-7890",
      "city": null,
      "state": null,
      "photo_url": null,
      "email": null,
      "createdAt": "2017-03-09T19:29:30.375Z",
      "updatedAt": "2017-03-09T19:29:30.375Z"
    } `

  * **Error Response:**

    <_Most endpoints will have many ways they can fail. From unauthorized access, to wrongful parameters etc._>

    * **Code:** 400 ERROR <br />
      **Content:** `{ error }`
