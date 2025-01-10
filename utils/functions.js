const dayjs = require("dayjs");
require("dayjs/locale/fr");

dayjs.locale("fr");

const formatBirthDate = (date) => {
  return dayjs(date, "YYYY-MM-DD").format("dddd D MMMM YYYY");
};

module.exports = { formatBirthDate };
