import {useState} from "react";
import './select-option.css'

export const SelectOption = ({ data, selectedOption, setSelectedOption, title = 'Выберите значение' }) => {

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    }

    return (
        <div className={"select_option_container"}>
            <select id="selectOption" value={selectedOption} onChange={handleOptionChange}>
                <option value="">{title}</option>
                {Array.isArray(data) && data.map(row =>
                    <option value={row?.value}>{row?.value}</option>
                )}
            </select>
        </div>
    );
}

export default SelectOption;