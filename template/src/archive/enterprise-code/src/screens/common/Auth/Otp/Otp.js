import React from 'react';
import OTPInput from 'react-native-otp-forminput';

function Otp() {
  const verifyCode = code => {
    console.log(code);
  };
  return (
    <OTPInput
      secureTextEntry
      title="Enter OTP"
      numberOfInputs={6}
      type="outline"
      onChange={code => {
        verifyCode(code);
      }}
    />
  );
}

export default Otp;
