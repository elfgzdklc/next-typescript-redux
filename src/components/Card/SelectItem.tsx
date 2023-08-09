//     const brands = [
//         {label: 'Dodge', value: 'D1'},
//         {label: 'Ford', value: 'F2'},
//         {label: 'Chevrolet', value: 'C3'}
//     ]
//     const model1 = [
//         {label: 'Challenger', value: "D1C1"},
//         {label: 'Charger', value: 'D1C2'},
//         {label: 'Coronet', value: "D1C3"},
//         {label: 'Super Bee', value: "S3"}
//     ]
//     const model2 = [
//         {label: 'Mustang', value: 'F2M1'},
//         {label: 'Mustang GT', value: 'F2M2'}
//     ]
//     const model3 = [
//         {label: 'Chevelle', value: 'C3C1'},
//         {label: 'Camaro', value: 'C3C2'},
//         {label: 'Corvette', value: 'C3C3'}
//     ]
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {RootState} from "../../store/rooteReducer"
import { setSelectedOption } from '../../store/select';

interface SelectComponentProps {
    options: string[];
}

const SelectComponent: React.FC<SelectComponentProps> = ({ options }) => {
    const dispatch = useDispatch();
    const selectedOption = useSelector((state: RootState) => state.select.selectedOption);

    const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSelectedOption(event.target.value));
    };

    return (
        <div>
            <select value={selectedOption || ''} onChange={handleSelectChange}>
                <option value="">Select an option</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {selectedOption && <p>Selected option: {selectedOption}</p>}
        </div>
    );
};

export default SelectComponent;
