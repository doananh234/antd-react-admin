import React, { PureComponent } from 'react';
import List from '../../../containers/rest/List';
import RestFieldItem from '../../../components/RestField/RestFieldItem';
import ActionGroup from '../../../components/RestActions/ActionGroup';
import EditButton from '../../../components/RestActions/EditButton';
import DeleteButton from '../../../components/RestActions/DeleteButton';

class CaseTypesList extends PureComponent {
  render() {
    return (
      <List {...this.props} resource="caseTypes">
        <RestFieldItem hasSearch title="name" source="shortName.vi" />
        <RestFieldItem hasSearch title="slug" source="slug" />
        <ActionGroup>
          <EditButton />
          <DeleteButton />
        </ActionGroup>
      </List>
    );
  }
}
CaseTypesList.propTypes = {};

export default CaseTypesList;
