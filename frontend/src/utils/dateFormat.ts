import { format, isValid, parseISO } from 'date-fns';

/**
 * Formats a date string or Date object to a specified format.
 * @param date - The date to format, either as a string or Date object.
 * @param dateFormat - The desired format string.
 * @returns The formatted date string.
 */
export const _date = (date: string | Date, dateFormat: string = 'yyyy-MM-dd'): string => {
  let dateObj: Date;

  if (typeof date === 'string') {
    dateObj = parseISO(date);
  } else {
    dateObj = date;
  }

  if (!isValid(dateObj)) {
    throw new Error('Invalid date');
  }

  return format(dateObj, dateFormat);
};
