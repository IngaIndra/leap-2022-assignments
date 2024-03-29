import { useEffect, useRef, useState } from "react";

const token = 1234;

export default function RefDemo() {
  const value = useRef("");

  const inputParent = useRef(null);

  useEffect(() => {
    inputParent.current.childNodes[0].focus();
  }, []);

  const handleInput = (e) => {
    value.current += e.target.value;
    if (value.current.length < 4) {
      inputParent.current.childNodes[value.current.length].focus();
      console.log(value.current.length);
    } else {
      inputParent.current.childNodes[3].value =
        inputParent.current.childNodes[3].value[0] || "";
      console.log("length", inputParent.current.childNodes[3].value);
    }
  };

  const handleFocus = (e) => {
    const length = value.current.length;
    if (length === 4) {
      inputParent.current.childNodes[3].focus();
    } else {
      inputParent.current.childNodes[length].focus();
    }
  };

  return (
    <div className="otp-example" ref={inputParent}>
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
      <input onChange={handleInput} onFocus={handleFocus} />
    </div>
  );
}
