import { FireFormData, FireNumbers } from "../models/FireCalculatorModels";
import { calculateFireChartData, calculateFireNumbers } from "./FireCalculationService";

describe('calculateFireNumbers', () => {
    test('Returns correct Fire Numbers', () => {
    
        const salary = 40_000;
        const expenses = 30_000;
        const withdrawalRate = 4;
    
        const result: FireNumbers = calculateFireNumbers(expenses, salary, withdrawalRate);
    
        expect(result.leanFireNumber).toEqual(750_000);
        expect(result.tradFireNumber).toEqual(1_000_000);
    });

    test('Returns 0 if either salary or expenses are 0', () => {
        
        let salary = 0;
        let expenses = 30_000;
        const withdrawalRate = 4;
    
        const result: FireNumbers = calculateFireNumbers(expenses, salary, withdrawalRate);
    
        expect(result.leanFireNumber).toEqual(0);
        expect(result.tradFireNumber).toEqual(0);

        salary = 40_000;
        expenses = 0;

        expect(result.leanFireNumber).toEqual(0);
        expect(result.tradFireNumber).toEqual(0);
    });
});

describe('calculateFireChartData', () => {

    const formData: FireFormData = {
        age: 25,
        currentSalary: 50_000,
        currentExpenses: 30_000,
        currentNetWorth: 0,
        withdrawalRate: 3.5,
        returnOnInvestment: 8
    }

    test('Should correctly calculate the age when lean and traditional fire are reached', () => {
        const yearlyFireData = calculateFireChartData(formData);

        const leanFireYear = yearlyFireData.filter((data) => data.leanFireReachedThisYear === true);

        const tradFireYear = yearlyFireData.filter((data) => data.tradFireReachedThisYear === true);

        // There should only be 1 year where the bool is set to true
        expect(leanFireYear.length).toEqual(1);
        expect(leanFireYear[0].age).toEqual(44);

        expect(tradFireYear.length).toEqual(1);
        expect(tradFireYear[0].age).toEqual(49);
    });
});