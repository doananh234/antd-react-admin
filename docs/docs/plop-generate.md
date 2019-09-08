# Use `plop` to create a new model

> Make sure your plop in install global. Now, let you try to create new Model management

- `plop`
- select first line: generate react 2 - Add new Anh.Doan admin 2
  <img src="https://i.imgur.com/RpKm5nJ.png"/>

- Enter Model Name.
  Example the endpoint like `api/v1/rooms` you will type:
  `? Model name: rooms`

- Enter all property of model:
  `? What is property Name? () name`
  `? What is property Name? () description`
  If you enter all property next question you don't type anything and enter:
  `? What is property Name? ()`

- See the result.
- `src/containers/Rooms`: had been created.
- `src/pages/Rooms`: had been created.
- `src/redux/rooms`: had been created and auto link to global redux.
- `src/routes/PrivateRoutes`: auto link to room pages to private route.
- `src/routes/ModalRoutes`: auto link to room pages to modal route.
- You can go `http://localhost:3000/rooms` and see the result.
