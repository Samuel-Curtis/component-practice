import ComingSoon from "../components/primary/coming_soon/ComingSoon";
import EnterPassword from "../components/ui_elements/enter_password/EnterPassword";
import GroceryList from "../components/ui_elements/grocery_list/GroceryList";
import { ComponentItem } from "../models/ComponentItem";

export const components: ComponentItem[] = [
    {
        name: 'Enter Password',
        category: 'UI Element',
        inspiration: 'https://www.uidesigndaily.com/posts/figma-enter-password-log-in-authentication-card-day-1583',
        component: EnterPassword 
    },
    {
        name: 'Analytics',
        category: 'UI Element',
        inspiration: 'https://www.uidesigndaily.com/posts/figma-analytics-statistics-day-1567',
        component: ComingSoon 
    },
    {
        name: 'Grocery List',
        category: 'UI Element',
        inspiration: 'https://www.uidesigndaily.com/posts/figma-to-do-list-day-1543',
        component: GroceryList 
    },
    {
        name: 'Debt Payoff Calculator',
        category: 'Finance',
        inspiration: '',
        component: ComingSoon 
    },
    {
        name: 'Fiancial Independence Calculator',
        category: 'Finance',
        inspiration: '',
        component: ComingSoon 
    }
]