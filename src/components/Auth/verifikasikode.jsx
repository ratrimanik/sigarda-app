const InputVerificationCode = () => {
  return (
    <div>
      <input
        className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-teal-500 focus:ring-teal-500"
        type="text"
        maxLength="1"
        pattern="[0-9]"
        inputMode="numeric"
        autoComplete="one-time-code"
        required
      />
    </div>
  );
};

export default InputVerificationCode;
