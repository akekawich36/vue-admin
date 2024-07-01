// src/components/DatePicker/dayjsLocale.js

import dayjs from "dayjs";
import "dayjs/locale/th";
import customParseFormat from "dayjs/plugin/customParseFormat";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.extend(customParseFormat);
dayjs.extend(buddhistEra);
dayjs.locale("th");

const locale = {
  lang: {
    placeholder: "เลือกวันที่",
    rangePlaceholder: ["เริ่มต้นวันที่", "สิ้นสุดวันที่"],
    locale: "th",
    today: "วันนี้",
    now: "ขณะนี้",
    backToToday: "กลับไปยังวันนี้",
    ok: "ตกลง",
    timeSelect: "เลือกเวลา",
    dateSelect: "เลือกวันที่",
    weekSelect: "เลือกสัปดาห์",
    clear: "ล้างค่า",
    month: "เดือน",
    year: "ปี",
    previousMonth: "เดือนก่อนหน้า (PageUp)",
    nextMonth: "เดือนถัดไป (PageDown)",
    monthSelect: "เลือกเดือน",
    yearSelect: "เลือกปี",
    decadeSelect: "เลือกทศวรรษ",
    yearFormat: "BBBB",
    dateFormat: "D MMMM BBBB",
    dayFormat: "D",
    dateTimeFormat: "D MMMM BBBB HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousYear: "ปีก่อนหน้า (Control + left)",
    nextYear: "ปีถัดไป (Control + right)",
    previousDecade: "ทศวรรษก่อนหน้า",
    nextDecade: "ทศวรรษถัดไป",
    previousCentury: "ศตวรรษก่อนหน้า",
    nextCentury: "ศตวรรษถัดไป",
  },
  timePickerLocale: {
    placeholder: "เลือกเวลา",
  },
};

export { dayjs, locale };
