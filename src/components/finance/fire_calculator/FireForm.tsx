import { ChangeEvent, useEffect, useState } from "react";
import { defaultFormData, FireFormData, YearlyFireData } from "./models/FireCalculatorModels";
import { calculateFireChartData } from "./utils/FireCalculationService";
import { NumberFormatValues, NumericFormat, SourceInfo } from "react-number-format"

interface FireFormProps {
    setFireChartData: (data: YearlyFireData[]) => void
}

function FireForm(props: FireFormProps) {

    const [formData, setFormData] = useState<FireFormData>(defaultFormData);

    // Initialize Fire Chart with default form data
    useEffect(() => {
        props.setFireChartData(calculateFireChartData(formData));
    }, []); // The empty array ensures this only happens when the component is mounted

    /**
     * 
     * @param formData 
     * 
     * Handles form submission
     */
    function onFormUpdate(event: React.FormEvent): void {
        event.preventDefault();
        props.setFireChartData(calculateFireChartData(formData));
    }

    /**
     * 
     * @param event 
     * 
     * Updates the formData state when a non-currency input value is changed
     */
    function handleChange(event: ChangeEvent<HTMLInputElement>): void {
        const name = event.target.name; // Name corresponds with form name attr and FireFormData field
        const value = event.target.value; // Value is the current value of the input field

        // Update form data using previous state, then update the recently changed form value
        // Check if there is a current value, if there is then format input to a Number
        // If field is blank, default to 0
        setFormData((prev) => ({
            ...prev,
            [name]: Number(value) || 0
        }))

    }

    /**
     * 
     * @param value Currency value in string format without prefix or separators
     * @param name The name given to the input field
     * 
     * Updates the formData state when a a currency input value is changed
     */
    function handleCurrencyChange(values?: NumberFormatValues, sourceInfo?: SourceInfo): void {

        if (!values || !sourceInfo) return;

        const name = sourceInfo.event?.currentTarget.name!;
        const formattedValue = Number(values.value);

        // Update form data using previous state, then update the recently changed form value
        // Check if there is a current value, then format input to a Number
        // If field is blank, default to 0
        setFormData((prev) => ({
            ...prev,
            [name]: formattedValue || 0
        }))

    }

    /**
     * Resets the form fields to the default values
     */
    function handleReset(): void {
        setFormData(defaultFormData);
    }

    return(
        <form onSubmit={onFormUpdate}>

            <label className="form-label" htmlFor="age">Current Age</label>
            <NumericFormat
                id="age"
                name="age"
                className="form-input"
                placeholder="25"
                value={formData.age}
                allowLeadingZeros={false}
                allowNegative={false}
                maxLength={2}
                minLength={1}
                onChange={handleChange}
            />

            <label className="form-label" htmlFor="currentSalary">Current Salary</label>
            <NumericFormat
                id="currentSalary"
                name="currentSalary"
                className="form-input"
                prefix="$"
                thousandsGroupStyle="thousand"
                thousandSeparator={true}
                allowLeadingZeros={false}
                allowNegative={false}
                maxLength={12}
                minLength={1}
                decimalScale={0}
                value={formData.currentSalary}
                onValueChange={handleCurrencyChange}
            />


            <label className="form-label" htmlFor="currentExpenses">Yearly Expenses</label>
            <NumericFormat
                id="currentExpenses"
                name="currentExpenses"
                className="form-input"
                prefix="$"
                thousandsGroupStyle="thousand"
                thousandSeparator={true}
                allowLeadingZeros={false}
                allowNegative={false}
                maxLength={12}
                minLength={1}
                decimalScale={0}
                value={formData.currentExpenses}
                onValueChange={handleCurrencyChange}
            />

            <label className="form-label" htmlFor="currentNetWorth">Current Net Worth</label>
            <NumericFormat
                id="currentNetWorth"
                name="currentNetWorth"
                className="form-input"
                prefix="$"
                thousandsGroupStyle="thousand"
                thousandSeparator={true}
                allowLeadingZeros={false}
                allowNegative={false}
                maxLength={12}
                minLength={1}
                decimalScale={0}
                value={formData.currentNetWorth}
                onValueChange={handleCurrencyChange}
            />

            <label className="form-label" htmlFor="withdrawalRate">Withdrawal Rate</label>
            <NumericFormat
                name="withdrawalRate" 
                id="withdrawalRate" 
                className="form-input"
                placeholder="3.5%" 
                allowNegative={false}
                allowLeadingZeros={true}
                decimalScale={1}
                suffix="%"
                value={formData.withdrawalRate}
                maxLength={4}
            />

            <label className="form-label" htmlFor="returnOnInvestment">Return on Investment</label>
            <NumericFormat
                name="returnOnInvestment" 
                id="returnOnInvestment" 
                className="form-input"
                placeholder="8%" 
                allowNegative={false}
                allowLeadingZeros={true}
                decimalScale={1}
                suffix="%"
                value={formData.returnOnInvestment}
                onValueChange={handleCurrencyChange}
                maxLength={4}
            />

            <div className="buttons">
                <button className="form-button btn-update" type="submit">Update</button>
                <button className="form-button btn-reset" onClick={handleReset}> Reset </button>
            </div>
        </form>
    )
}

export default FireForm;