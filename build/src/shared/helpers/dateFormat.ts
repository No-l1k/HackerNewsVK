import moment from 'moment';

export const formatDate = (timestamp: number) => {
    const date = moment.unix(timestamp);
    return date.format('MM/DD/YYYY, HH:mm:ss');
  };