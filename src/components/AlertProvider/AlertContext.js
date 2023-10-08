import { createContext } from 'react';

const AlertContext = createContext({
  message: null,
  type: 'success',
  description:null,
  showAlert: false,
  showAlertMessage: () => {},
  hideAlertMessage: () => {}
});

export default AlertContext