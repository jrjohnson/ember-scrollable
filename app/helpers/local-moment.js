var localMoment = function(time, timeZone, format) {
  var timeToFormat;

  if (timeZone != null) {
    timeToFormat = moment.tz(time, timeZone);
  } else {
    timeToFormat = moment(time);
  }

  return timeToFormat.format(format);
};

export default localMoment;