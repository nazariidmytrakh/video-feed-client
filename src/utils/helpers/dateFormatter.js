import moment from 'moment';

const dateFormatter = ({ date, format }) => (
  moment(date).format(format)
);

export default dateFormatter;
