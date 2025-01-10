const dayjs = require("dayjs");
require("dayjs/locale/fr");

dayjs.locale("fr");

const formatBirthDate = (date) => {
  return dayjs(date, "YYYY-DD-MM").format("DD MMMM YYYY");
};

module.exports = { formatBirthDate };
