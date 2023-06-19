import { useState, useEffect } from "react";
import styled from 'styled-components';

const CreatePlanet = ({ createPlanet }) => {
    // Define state variables for form data and individual input values
    const [formData, setFormData] = useState({});
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState(false);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);

    // Update formData whenever the input values change
    useEffect(() => {
        setFormData({
            "Planet": value1,
            "Color": ["Default", value2],
            "RingSystem": value3,
            "MeanTemperatureC": value4,
            "NumberOfMoons": parseInt(value5),
            "CustomPlanet": "true"
        });
    }, [value1, value2, value3, value4, value5]);

    // Handle form submission
    const handleCreatePlanet = (event) => {
        event.preventDefault();
        createPlanet(formData);
        // Reset input values after submission
        setValue1("");
        setValue2("");
        setValue3(false);
        setValue4(0);
        setValue5(0);
    };

    // Event handlers for updating individual input values
    const handleValue1 = (event) => {
        setValue1(event.target.value);
    };
    const handleValue2 = (event) => {
        setValue2(event.target.value);
    };
    const handleValue3 = (event) => {
        setValue3(event.target.value);
    };
    const handleValue4 = (event) => {
        setValue4(event.target.value);
    };
    const handleValue5 = (event) => {
        setValue5(event.target.value);
    };

    return (
        <form onSubmit={handleCreatePlanet}>
            <FlexBoxul>
                {/* Label and input for planet name */}
                <label htmlFor="create1">What is your planet named?</label>
                <input onChange={handleValue1} value={value1} required id="create1" />

                {/* Label and select for planet color */}
                <label htmlFor="create2">What color is your planet?</label>
                <select value={value2} onChange={handleValue2} required id="create2">
                    <option value=""></option>
                    <option value="Red">Red</option>
                    <option value="Green">Green</option>
                    <option value="Blue">Blue</option>
                    {/* Other color options */}
                </select>

                {/* Label and radio buttons for ring system */}
                <label htmlFor="create3">Does your planet have rings?</label>
                <FlexBoxDiv>
                    <label>Yes</label>
                    <input onChange={handleValue3} required id="create3" type="radio" name="hasRings" value="true" />
                </FlexBoxDiv>
                <FlexBoxDiv>
                    <label>No</label>
                    <input onChange={handleValue3} id="create3" type="radio" name="hasRings" value="false" />
                </FlexBoxDiv>

                {/* Label and input for average temperature */}
                <label htmlFor="create4">What is the average temperature on your planet?</label>
                <input onChange={handleValue4} value={value4} type="number" min="-1000" max="1000" id="create4" />

                {/* Label and input for number of moons */}
                <label htmlFor="create5">How many moons does your planet have?</label>
                <input onChange={handleValue5} value={value5} type="number" min="0" max="100" id="create5" />

                {/* Submit button */}
                <Submit type="submit" />
            </FlexBoxul>
        </form>
    );
};

// Styled components for styling the form
const FlexBoxul = styled.ul`
    display: flex;
    flex-direction: column;
    width: 30%;
    align-items: flex-start;
`;

const FlexBoxDiv = styled.li`
    display: flex;
    flex-direction: row;
    width: 30%;
`;

const Submit = styled.input`
    margin-top: 4%;
`;

export default CreatePlanet;
