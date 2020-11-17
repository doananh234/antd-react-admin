import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'antd';
import RestShowComponent from 'components/RestLayout/Show';
import { useLocation } from 'react-router';
import { getIdByUrl } from 'utils/tools';
import CRUDActions from '../../../redux/crudActions';
import crudSelectors from '../../../redux/crudSelectors';
import { PRIMARY_KEY } from '../../../redux/crudCreator/dataProvider';

const RestShow = (props) => {
  const { onBack, showModal } = props;
  const location = useLocation();
  useEffect(() => {
    props.retrieveOneRecord(getIdByUrl(props, location));
    // eslint-disable-next-line
  }, []);

  return !showModal ? (
    <RestShowComponent {...props} />
  ) : (
    <div>
      <Modal visible onCancel={onBack} footer={null}>
        <RestShowComponent {...props} />
      </Modal>
    </div>
  );
};

RestShow.propTypes = {
  retrieveOneRecord: PropTypes.func,
  onBack: PropTypes.func,
  showModal: PropTypes.bool,
  initialOptions: PropTypes.object,
};
const mapStateToProps = (state, props) => ({
  record: crudSelectors[props.resource].getCurrentData(state, props),
});

const mapDispatchToProps = (dispatch, props) => ({
  retrieveOneRecord: (id) =>
    dispatch(
      CRUDActions[props.resource].getDataById({
        data: { [PRIMARY_KEY]: id },
        options: props.initialOptions,
      }),
    ),
  onBack: () => props.history.goBack(),
  gotoEditPage: (id) =>
    props.history.push(
      `${props.match.path.replace('/:id/show', '')}/${id}/edit`,
    ),
  deleteItem: (id) => {
    dispatch(
      CRUDActions[props.resource].delete({
        data: { [PRIMARY_KEY]: id },
      }),
    );
    props.history.push(props.match.path.replace('/:id/show', ''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RestShow);
