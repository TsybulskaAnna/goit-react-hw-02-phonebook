import PropTypes from 'prop-types';

const Notification = ({ mess }) => {
  return <p>{mess}</p>;
};

Notification.protoTypes = { mess: PropTypes.string };

export default Notification;