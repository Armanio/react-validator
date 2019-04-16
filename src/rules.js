// eslint-disable-next-line
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default {
  notEmpty: [{
    rule: value => value !== '' && value.length > 0,
    message: 'Value is required',
  }],

  //

  email: [{
    rule: value => value !== '' && value.length !== 0,
    message: 'Email is required',
  }, {
    rule: value => emailReg.test(String(value).toLowerCase()),
    message: 'Email is invalid',
  }],
};
