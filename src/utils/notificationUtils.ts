import { showNotification } from '@mantine/notifications';

export const showSuccessNotification = (message: string) => {
  showNotification({
    message: message,
    color: 'green',
    autoClose: 2000,
  });
};

export const showErrorNotification = (message: string) => {
  showNotification({
    message: message,
    color: 'red',
    autoClose: 2000,
  });
};
export const showWarningNotification = (message: string) => {
  showNotification({
    message: message,
    color: 'yellow',
    autoClose: 2000,
  });
};
