export const isValidPassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-_+=])[A-Za-z0-9!@#$%^&*()-_+=]{8,}$/;
  return passwordRegex.test(password);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidDate = (dateString: string): boolean => {
  const dateObject = new Date(dateString);
  return (
    !isNaN(dateObject.getTime()) &&
    dateObject.toISOString().slice(0, 10) === dateString
  );
};
