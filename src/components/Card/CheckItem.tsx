// src/components/CheckboxList.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../store/rooteReducer"
import { toggleCheckbox } from '../../store/check';

interface CheckboxListProps {
    items: string[];
}

const CheckboxList: React.FC<CheckboxListProps> = ({ items }) => {
    const dispatch = useDispatch();
    const selectedItems = useSelector((state: RootState) => state.check.checkedItems);

    const handleCheckboxChange = (item: string) => {
        dispatch(toggleCheckbox(item));
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        checked={selectedItems.includes(item)}
                        onChange={() => handleCheckboxChange(item)}
                    />
                    <label>{item}</label>
                </div>
            ))}
            {selectedItems && <p>Checked option: {selectedItems} </p>}

        </div>
    );
};

export default CheckboxList;
