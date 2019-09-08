import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import CRUDActions from '../../../redux/crudActions';
import RestShowComponent from '../../../components/RestLayout/Show';
import crudSelectors from '../../../redux/crudSelectors';
import { PRIMARY_KEY } from '../../../redux/crudCreator/actions';
import { upperCaseFirstChart, getIdByUrl } from '../../../utils/tools';

class RestShow extends Component {
  static propTypes = {
    retrieveOneRecord: PropTypes.func,
    onBack: PropTypes.func,
    showModal: PropTypes.bool,
  };

  componentDidMount() {
    this.props.retrieveOneRecord(getIdByUrl(this.props));
  }

  render() {
    const { onBack, showModal } = this.props;

    return !showModal ? (
      <RestShowComponent {...this.props} />
    ) : (
      <div>
        <Modal visible onCancel={onBack} footer={null}>
          <RestShowComponent {...this.props} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  record: crudSelectors[props.resource].getCurrentData(state),
  location: state.router.location,
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveOneRecord: id =>
    dispatch(
      CRUDActions[props.resource][`getById${upperCaseFirstChart(props.resource)}`]({
        [PRIMARY_KEY]: id,
      })
    ),
  onBack: () => props.history.goBack(),
  gotoEditPage: id => props.history.push(`${props.match.path.replace('/:id/show', '')}/${id}/edit`),
  deleteItem: id => {
    dispatch(
      CRUDActions[props.resource][`delete${upperCaseFirstChart(props.resource)}`]({
        [PRIMARY_KEY]: id,
      })
    );
    props.history.push(props.match.path.replace('/:id/show', ''));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestShow);
