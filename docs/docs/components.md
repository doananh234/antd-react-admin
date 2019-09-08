# Components

## ActionGroup
- `/components/RestActions/ActionGroup`

Use to wrapper Rest Button actions. fix button action all right.

<img src='https://i.imgur.com/BKOKG68.png' />

## DeleteButton
- `/components/RestActions/DeleteButton`

use to provide delete actions on listview.

## EditButton
- `/components/RestActions/EditButton`

use to provide go to edit page on listview.

## RestFieldItem
- `/components/RestField/RestFieldItem`

use to provide go to edit page on listview.

### Props

| Props | Description | Default |
| ------- | ----------- | ----------- |
| `record` | The `props` provide the row data for component | `{}` |
| `source` | The `props` use to define property of record will show on cell | `''` |
| `format` | The `function` use to format data before render | () => {} |
| `component` | The `Component` use to render on cell. | `<span />` |
| `valueProp` | The `props` use set the data for component. | `children` |
| `formatSubmitData` | The `function` use to format data before change  and request API. | `() => {}` |

## RestInputItem
- `/components/RestInput/RestInputItem`

use to provide go to edit page on listview.

### Props

| Props | Description | Default |
| ------- | ----------- | ----------- |
| `record` | The `props` provide the row data for component | `{}` |
| `source` | The `props` use to define property of record will show on cell | `''` |
| `format` | The `function` use to format data before render | () => {} |
| `ContentComponent` | The `Component` use to render on cell. | `Input` |
| `isReference` | The `props` `children` of component is `ReferenceInput`. | `false` |
| `defaultValue` | The `props` use to define `defaultValue` for form. | `undefined` |
| `ruleType` | The `props` use to define `validateData` for form. | `string` |
| `formOptions` | The `props` use to overwrite `props` of `Antd Form`. | `{}` |
| `rules` | The `props` use to overwrite `rules` of `Antd Form`. | `[]` |
| `header` | The `props` use to overwrite `header` of `Antd Form`. | `${source}` |
| `valuePropName` | The `props` use define prop value need to use for Form. | `value` |

## RestSelect
- `/components/RestInput/RestSelect`

use to provide go to edit page on listview.

### Props

| Props | Description | Default |
| ------- | ----------- | ----------- |
| `resourceData` | The `props` provide the array data reference | `[]` |
| `disabled` | The `props` use to enabled/disabled edit form | `false` |
| `required` | The `props` use to set required for form | `false` |
| `record` | The `props` provide the row data for component | `{}` |
| `source` | The `props` use to define property of record will show on cell | `''` |
| `format` | The `function` use to format data before render | () => {} |
| `ContentComponent` | The `Component` use to render on cell. | `Input` |
| `isReference` | The `props` `children` of component is `ReferenceInput`. | `false` |
| `defaultValue` | The `props` use to define `defaultValue` for form. | `undefined` |
| `ruleType` | The `props` use to define `validateData` for form. | `string` |
| `formOptions` | The `props` use to overwrite `props` of `Antd Form`. | `{}` |
| `rules` | The `props` use to overwrite `rules` of `Antd Form`. | `[]` |
| `header` | The `props` use to overwrite `header` of `Antd Form`. | `${source}` |
| `onSearch` | The `function` use to search data. | `undefined` |
| `searchKey` | The `props` use defined property use for search. | `undefined` |
| `selectProps` | The `props` use overwrite `Antd Select` | `{}` |
| `formatText` | The `function` use overwrite format data for `Option` | `undefined` |
