import { DATE_FORMATE } from 'constants/shared/common';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(utc);

export const toLocalDateTime = (DateTimeObj, DateFormat = DATE_FORMATE[2]) =>
  dayjs.utc(dayjs(DateTimeObj).format(DATE_FORMATE[1])).local().format(DateFormat);

export const toUtcDateTime = (DateTimeObj, currentTime = false) =>
  dayjs(currentTime ? DateTimeObj + dayjs().format(DATE_FORMATE[5]) : DateTimeObj)
    .utc()
    .format(DATE_FORMATE[4]);

export const dateTimeToString = (DateTimeObj, DateFormat = DATE_FORMATE[2]) =>
  dayjs(DateTimeObj).format(DateFormat);

export const formReadableDT = (date, formate = DATE_FORMATE[9]) =>
  dayjs(toLocalDateTime(date, formate));

export const currentDT = (DateFormat = DATE_FORMATE[9]) => dayjs().format(DateFormat);
