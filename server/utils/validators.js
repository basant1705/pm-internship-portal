// Email Validation
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Phone Validation (10 digits)
export const isValidPhone = (phone) => {
  const regex = /^[0-9]{10}$/;
  return regex.test(phone);
};

// Password Validation
export const isStrongPassword = (password) => {
  // Minimum 6 characters
  return password.length >= 6;
};

// Required Field Validation
export const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    value.toString().trim() === ""
  );
};