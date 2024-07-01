import { dayjs } from "../components/DatePicker/dayjsLocale";

const getDateNow = (format) => {
  const dateFormat = format ? format : "DD-MM-BBBB";
  return dayjs().format(dateFormat);
};

const formatDate = (date, format) => {
  const dateFormat = format ? format : "DD-MM-BBBB";
  return dayjs(date).format(dateFormat);
};

export default {
  getDateNow,
  formatDate,
};
