import format from './format';
import utcToZonedTime from './utcToZonedTime';

export function cloneObject(dirtyObject): Record<string, any> {
  dirtyObject = dirtyObject || {};
  const object = {};

  for (const property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property];
    }
  }

  return object;
}

/**
 * @name formatInTimeZone
 * @category Time Zone Helpers
 * @summary Gets the offset in milliseconds between the time zone and Universal Coordinated Time (UTC)
 *
 * @param date - the date representing the local time / real UTC time
 * @param timeZone - the time zone this date should be formatted for; can be an offset or IANA time zone
 * @param formatStr - the string of tokens
 * @param [options] - the object with options. See [Options]{@link https://date-fns.org/docs/Options}
 * @param [options.additionalDigits=2] - passed to `toDate`. See [toDate]{@link
 *   https://date-fns.org/docs/toDate}
 * @param [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param [options.firstWeekContainsDate=1] - the day of January, which is
 * @param [options.locale=defaultLocale] - the locale object. See
 *   [Locale]{@link https://date-fns.org/docs/Locale}
 * @param [options.awareOfUnicodeTokens=false] - if true, allows usage of Unicode tokens causes confusion:
 *   - Some of the day of year tokens (`D`, `DD`) that are confused with the day of month tokens (`d`, `dd`).
 *   - Some of the local week-numbering year tokens (`YY`, `YYYY`) that are confused with the calendar year tokens
 *   (`yy`, `yyyy`). See: https://git.io/fxCyr
 * @param [options.timeZone=''] - used to specify the IANA time zone offset of a date String.
 * @returns the formatted date string
 */
export default function formatInTimeZone(date, timeZone, formatStr, options?) {
  const extendedOptions = cloneObject(options);

  extendedOptions.timeZone = timeZone;

  return format(utcToZonedTime(date, timeZone), formatStr, extendedOptions);
}
