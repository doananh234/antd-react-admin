export const validateRegex = {
  phone: /((\+84[0-9]{9})|(\b0[0-9]{9}))(?![0-9])/gs,
  password: /^(?=.*[a-z])(?=.*[0-9])(?=.*\d).{6,}$/g,
  username: /^(?=.{3,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+([_.])$/g,
  editBookingId: '#bookings/(.*)/edit',
  fullName: /^[a-z0-9 ]{3,100}$/iu,
};
