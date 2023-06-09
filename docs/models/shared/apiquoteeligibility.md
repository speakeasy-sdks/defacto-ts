# APIQuoteEligibility


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Amount requested, in cents. For example, to request 10€, the value to pass is 1000            |
| `borrower`                                                                                    | [APIQuoteEligibilityBorrower](../../models/shared/apiquoteeligibilityborrower.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `buyer`                                                                                       | [BusinessIdentifier](../../models/shared/businessidentifier.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | End date of the financing to check eligibility for.                                           |
| `seller`                                                                                      | [BusinessIdentifier](../../models/shared/businessidentifier.md)                               | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Start date of the financing to check eligibility for.                                         |