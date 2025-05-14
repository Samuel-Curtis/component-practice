export interface FireFormData {
    age: number,
    currentSalary: number,
    currentExpenses: number,
    currentNetWorth: number,
    withdrawalRate: number,
    returnOnInvestment: number
}

export interface FireNumbers {
    leanFireNumber: number,
    tradFireNumber: number
}

export interface YearlyFireData {
    age: number,
    contributions: number,
    totalInvestments: number,
    growth: number,
    leanFireReachedThisYear: boolean,
    tradFireReachedThisYear: boolean
}

// Default Data
export const defaultFormData: FireFormData = {
    age: 25,
    currentSalary: 50_000,
    currentExpenses: 30_000,
    currentNetWorth: 0,
    withdrawalRate: 3.5,
    returnOnInvestment: 8
}