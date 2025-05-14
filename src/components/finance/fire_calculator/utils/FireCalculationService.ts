import { FireFormData, FireNumbers, YearlyFireData } from "../models/FireCalculatorModels";

/**
 * 
 * @param expenses The total yearly expenses of the user
 * @param withdrawalRate The percentage that the user will withdraw from their portfolio in retirement
 * 
 * Calculates the users 'Fire Number' - The value their portfolio needs to reach before they can retire
 */
export function calculateFireNumbers(expenses: number, currentSalary: number, withdrawalRate: number): FireNumbers {
    if (expenses <= 0 || currentSalary <= 0) {
        return { leanFireNumber: 0, tradFireNumber: 0 }
    }

    return {
        leanFireNumber: Number((expenses / (withdrawalRate / 100)).toFixed(2)),
        tradFireNumber: Number((currentSalary / (withdrawalRate / 100)).toFixed(2))
    }
}

/**
 * 
 * @param formData Values from the FireForm component
 * @returns An array of YearlyFireData objects to populate the FireChart component
 * 
 * Takes in data from the FireForm and calculates the expected portfolio value for the user for every year until
 * they are either 100 years old or for five years after they have reached retirement 
 */
export function calculateFireChartData(formData: FireFormData): YearlyFireData[] {

    // Initialize Fire Data Array
    let yearlyFireData: YearlyFireData[] = [];

    // Initialize variables
    let portfolioValue: number = formData.currentNetWorth;
    let totalContributions: number = 0;
    const annualContribution: number = formData.currentSalary - formData.currentExpenses;
    const apy = formData.returnOnInvestment / 100;

    // Fire Numbers
    const fireNumbers: FireNumbers = calculateFireNumbers(formData.currentExpenses, formData.currentSalary, formData.withdrawalRate);

    // Tracker for when Fire Numbers are reached
    let leanFireAge: number | null = null;
    let tradFireAge: number | null = null;

    // Populate Fire Data array with projected values until user reaches 100 years old
    for (let age = formData.age; age <= formData.age + 100; age++) {

        // Calculate growth for the year
        let growth = portfolioValue * apy;

        // Update contributions
        totalContributions += annualContribution;

        // Update portfolio using compounded interest and annual contribution
        portfolioValue = portfolioValue * (apy + 1) + annualContribution

        // Check if FireNumbers have been reached
        const leanFireReachedThisYear = leanFireAge === null && portfolioValue >= fireNumbers.leanFireNumber;
        const tradFireReachedThisYear = tradFireAge === null && portfolioValue >= fireNumbers.tradFireNumber;

        // If lean/trad fire numbers were reached this year, update fire age value
        if (leanFireReachedThisYear) leanFireAge = age;
        if (tradFireReachedThisYear) tradFireAge = age;
        
        // Push Yearly Fire Data for current year
        yearlyFireData.push({
            age,
            contributions: Number(totalContributions.toFixed(2)),
            totalInvestments: Number(portfolioValue.toFixed()),
            growth: Number(growth.toFixed(2)),
            leanFireReachedThisYear: leanFireReachedThisYear,
            tradFireReachedThisYear: tradFireReachedThisYear
        });

        // If Traditional Fire has been reached, and was reached 5 years ago, break the loop
        if (tradFireAge && yearlyFireData[yearlyFireData.length-5].tradFireReachedThisYear) break;
        
    }

    return yearlyFireData;
}