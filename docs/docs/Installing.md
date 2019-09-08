# Installing

## Requirements

- node >= 8
- [antd](https://ant.design/components)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux-saga](https://redux-saga.js.org/)
- [plop](https://github.com/amwmedia/plop)

## npm

- `npm install -g plop`
- `npm install`

## Structure

- `src/containers`: We save all container&components of a page in here.
- `src/pages`: We save all pages of the app in here.
- `src/components`: We save all reuse components in here.
- `src/api`: We save all endpoint will be call to server in here.
- `src/assets`: We save all media, image, font, icon, assets,... in here.
- `src/configs`: We save all theme(color, font,...), text for multi locale, localData in here.
- `src/utils`: We save all tools, format data function,... in here.
- `src/components/RestActions`: All action Button can do in admin (CRUD).
- `src/components/RestField`: All Component use to show data in admin.
- `src/components/RestInput`: All Form Input Component use to edit, create data in admin.
- `src/components/RestLayout`: All Main layout use to show, edit, create data in admin. Provide UI for list and Form.
- `src/containers/rest`: All Container of Rest admin connect to redux. Provide function get data, update data into reducer.
- `src/redux/crudActions`: Provide all action of reactAction: getAllModels, getByIdModels, createModels, editModels, deleteModels,...
- `src/redux/crudSelectors`: Provide selectors of Rest admin: getDataArr, getTotal,...
