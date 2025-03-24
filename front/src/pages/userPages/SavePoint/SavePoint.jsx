import React, { useState } from "react";
/**@jsxImportSource @emotion/react */
import * as s from './style';

const SavePoint = () => {
    const [input, setInput] = useState("");
    
    const formatPhoneNumber = (value) => {
        value = value.replace(/[^0-9]/g, "");
        if (value.length <= 3) return value;
        if (value.length <= 7) return `${value.slice(0, 3)}-${value.slice(3)}`;
        return `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    };

    const handleButtonClick = (value) => {
        if (value === "×") {
            setInput(formatPhoneNumber(input.slice(0, -1)));
        } else if (value === "확인") {
            alert(`입력된 번호: ${input}`);
        } else {
            if (input.replace(/-/g, "").length < 11) {
                setInput(formatPhoneNumber(input + value));
            }
        }
    };

    return (
        <div css={s.background}>
            <div css={s.container}>
                <p>적립할 번호를 입력해주세요</p>
                <input type="text" value={input} readOnly css={s.input} />
                <div css={s.keypad}>
                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "×", "0", "확인"].map((key) => (
                        <button key={key} onClick={() => handleButtonClick(key)} css={s.button}>
                            {key}
                        </button>
                    ))}
                </div>
                <button css={s.footer}>넘어가기</button>
            </div>
        </div>
    );
};

export default SavePoint;