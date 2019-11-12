import moment from 'moment';

const lengthFormatter = ({ length, format }) => {
  const durationInMilliseconds = moment.duration(length, 'seconds').asMilliseconds();

  return moment.utc(durationInMilliseconds).format(format);
};

export default lengthFormatter;
