const formatDayOfMonth = (date) => {
    let dayOfMonth = date.getDate();
    const lastDigit = dayOfMonth % 10;
  
    if (lastDigit === 1 && dayOfMonth !== 11) {
      return `${dayOfMonth}st`;
    } else if (lastDigit === 2 && dayOfMonth !== 12) {
      return `${dayOfMonth}nd`;
    } else if (lastDigit === 3 && dayOfMonth !== 13) {
      return `${dayOfMonth}rd`;
    } else {
      return `${dayOfMonth}th`;
    }
  };
  
  module.exports = (
    timestamp,
    { monthLength = 'short', dateSuffix = true } = {}
  ) => {
    const months = [
      monthLength === 'short' ? 'Jan' : 'January',
      monthLength === 'short' ? 'Feb' : 'February',
      monthLength === 'short' ? 'Mar' : 'March',
      monthLength === 'short' ? 'Apr' : 'April',
      monthLength === 'short' ? 'May' : 'May',
      monthLength === 'short' ? 'Jun' : 'June',
      monthLength === 'short' ? 'Jul' : 'July',
      monthLength === 'short' ? 'Aug' : 'August',
      monthLength === 'short' ? 'Sep' : 'September',
      monthLength === 'short' ? 'Oct' : 'October',
      monthLength === 'short' ? 'Nov' : 'November',
      monthLength === 'short' ? 'Dec' : 'December',
    ];
  
    const dateObj = new Date(timestamp);
    const formattedMonth = months[dateObj.getMonth()];
    const dayOfMonth = dateSuffix ? formatDayOfMonth(dateObj) : dateObj.getDate();
    const year = dateObj.getFullYear();
    const hour = dateObj.getHours() % 12 || 12;
    const minutes = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();
    const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${year} at ${hour}:${minutes} ${periodOfDay}`;
  
    return formattedTimeStamp;
  };