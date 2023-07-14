import { registerTranslation } from 'react-native-paper-dates'
export default registerTranslation('es', {
  save: 'Guardar',
  selectSingle: 'Selecte date',
  selectMultiple: 'Select dates',
  selectRange: 'Select period',
  notAccordingToDateFormat: (inputFormat) =>
    `Date format must be ${inputFormat}`,
  mustBeHigherThan: (date) => `Must be later then ${date}`,
  mustBeLowerThan: (date) => `Must be earlier then ${date}`,
  mustBeBetween: (startDate, endDate) =>
    `Must be between ${startDate} - ${endDate}`,
  dateIsDisabled: 'Dias no permitidos',
  previous: 'Anterior',
  next: 'Proximo',
  typeInDate: 'Type in date',
  pickDateFromCalendar: 'Seleccione fechas del calendario',
  close: 'Cerrar'
})
