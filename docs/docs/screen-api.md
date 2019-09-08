# Screen API

When we manage data. we have 4 actions: Create, Read, Update and Delete the data. coz, we have 4 screen Component for management.

- `/containers/rest/List`: Show list data.
- `/containers/rest/Edit`: Show data detail and edit, update data.
- `/containers/rest/Create`: Create new data.
- `/containers/rest/Show`: Show data detail.

# List
- `/containers/rest/List`

The  Rest List use to show data of a model.


## Props

| Props | Description | Default |
| ------- | ----------- | ----------- |
| `resource` | The `props` use to select data from reducer. ex: rooms | `undefined` |
| `redirects` | The `props` use to define the transition for redirect to `Edit` and `Create` page:`modal` or `screen` | `{ edit: modal', create: 'modal' }` |
| `rootPath` | The `props` use to define the prefix route for a page when `isUpdateRoute: true`. ex: browser location: `configs/rooms` => `rootPath='config'` | `''` |
| `isUpdateRoute` | The `props` use to setup for change/unchange browser location when change filter. | `true` |
| `defaultOptions` | The `props` use to define default options for getAllModels action. ex: `defaultOptions: { customApi: 'groups/$id/members' }` | `{}` |
| `initCreateData` | The `props` use to define default options for default data when open `Create Page`. ex: `initCreateData: { userId: '$id' }` | `{}` |
| `initialFilter` | The `props` use to define default filter  for getAllModels. ex: `initialFilter: { limit: 50, filter: {userId: '${id}'} }` | `{}` |
| `header` | The `props` use to define Page Title | `${resource}.header` |
| `hasCreate` | The `props` use to show/hide Create button. | `true` |
| `hasExport` | The `props` use to show/hide Export button. | `true` |
| `hasSearch` | The `props` use to show/hide Search input. | `true` |
| `noCardWrapper` | The `props` use to show/hide `Breadcrumb` and `Title` and `Box`. | `true` |
| `isScroll` | The `props` use/un-use to Horizontal scroll. | `true` |
| `onRow` | The `props` overwrite  onClick, onDoubleClick the row on table. default: doubleClick will go to `Edit Page` | `undefined` |

# Edit
- `/containers/rest/Edit`
- `/containers/rest/Create`

The Rest Edit use to show&edit data of a model.
The Rest Create use to create a new data of a model.

## Props

| Props | Description | Default |
| ------- | ----------- | ----------- |
| `resource` | The `props` use to select data from reducer. ex: rooms | `undefined` |
| `rootPath` | The `props` use to define the prefix route for a page when `isUpdateRoute: true`. ex: browser location: `configs/rooms` => `rootPath='config'` | `''` |
| `header` | The `props` use to define Page Title | `${resource}.header` |
| `noCardWrapper` | The `props` use to show/hide `Breadcrumb` and `Title` and `Box`. | `true` |
| `showModal` | The `props` use to show/hide `Breadcrumb`, and show `Modal Title`. | `true` |
| `formatOnSubmit` | The `props` is the function use to format data before submit and call API. | `undefined` |
| `customSubmitButton` | The `props` is the component use to overwrite footer Button of Create&Edit Form.<br>- component<br>-`null`: to hidden button | `undefined` |

# Show
- `/containers/rest/Show`

The Rest Show use to show data of a model.

## Props

| Props | Description | Default |
| ------- | ----------- | ----------- |
| `resource` | The `props` use to select data from reducer. ex: rooms | `undefined` |
| `rootPath` | The `props` use to define the prefix route for a page when `isUpdateRoute: true`. ex: browser location: `configs/rooms` => `rootPath='config'` | `''` |
| `header` | The `props` use to define Page Title | `${resource}.header` |
| `noCardWrapper` | The `props` use to show/hide `Breadcrumb` and `Title` and `Box`. | `true` |
| `showModal` | The `props` use to show/hide `Breadcrumb`, and show `Modal Title`. | `true` |
