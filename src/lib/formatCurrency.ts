export function formatCurrency(
    amount: number,
    currencyCode: string = "EUR",
): string {
    try {
        return new Intl.NumberFormat("en-EU",{
            style: "currency",
            currency:currencyCode.toUpperCase(),
        }).format(amount);
    }catch(error){
        console.error("Error formatting currency:",currencyCode, error);
        return `${currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
    }
}