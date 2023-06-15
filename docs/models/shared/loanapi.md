# LoanAPI


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `amount`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | Loan amount in cents                                                                          |
| `beneficiary`                                                                                 | [LightBusiness](../../models/shared/lightbusiness.md)                                         | :heavy_check_mark:                                                                            | Entity receiving the money                                                                    |
| `borrower`                                                                                    | [LoanAPIBorrower](../../models/shared/loanapiborrower.md)                                     | :heavy_minus_sign:                                                                            | Entity legally contracting the loan                                                           |
| `closedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Loan full repayment date                                                                      |
| `contractUrl`                                                                                 | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [LoanAPICurrency](../../models/shared/loanapicurrency.md)                                     | :heavy_check_mark:                                                                            | ISO 4217 currency code.                                                                       |
| `denialReason`                                                                                | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `earliestToRepayAt`                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Loan reimbursement earliest possible date                                                     |
| `feesEstimated`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | In cents (estimated loan duration * interest * amount)                                        |
| `feesOngoing`                                                                                 | *number*                                                                                      | :heavy_minus_sign:                                                                            | Fees if you repay today. In cents (current duration * interest * amount)                      |
| `guarantor`                                                                                   | [LoanAPIGuarantor](../../models/shared/loanapiguarantor.md)                                   | :heavy_minus_sign:                                                                            | Entity legally responsible to payback the loan                                                |
| `id`                                                                                          | *any*                                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `invoiceIds`                                                                                  | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | Invoices already uploaded that the loan should finance                                        |
| `loanFrom`                                                                                    | [LoanAPILoanFrom](../../models/shared/loanapiloanfrom.md)                                     | :heavy_minus_sign:                                                                            | Bank account used to transfer the amount of the loan to the borrower                          |
| `loanFromReferences`                                                                          | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | References in the transfer of the loan payment, on the account sending the money              |
| `loanTo`                                                                                      | [LoanAPILoanTo](../../models/shared/loanapiloanto.md)                                         | :heavy_minus_sign:                                                                            | Bank account receiving the money of the loan                                                  |
| `loanToReferences`                                                                            | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | References in the transfer of the loan payment, on the account receiving the money            |
| `loanType`                                                                                    | [LoanAPILoanType](../../models/shared/loanapiloantype.md)                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `metadata`                                                                                    | Record<string, *any*>                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `notificationEmails`                                                                          | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `repaidAmount`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Amount of the loan that has been repaid by the borrower, in cents                             |
| `repaidNominalAt`                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `repaymentFrom`                                                                               | [LoanAPIRepaymentFrom](../../models/shared/loanapirepaymentfrom.md)                           | :heavy_minus_sign:                                                                            | Bank account repaying the loan                                                                |
| `repaymentFromReferences`                                                                     | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | References in the transfer of the loan repayment, on the account sending the money            |
| `repaymentMethod`                                                                             | [LoanAPIRepaymentMethod](../../models/shared/loanapirepaymentmethod.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `repaymentTo`                                                                                 | [LoanAPIRepaymentTo](../../models/shared/loanapirepaymentto.md)                               | :heavy_minus_sign:                                                                            | Bank account to send the loan repayment to                                                    |
| `repaymentToReferences`                                                                       | *string*[]                                                                                    | :heavy_minus_sign:                                                                            | References in the transfer of the loan repayment, on the account receiving the money          |
| `status`                                                                                      | [LoanAPIStatus](../../models/shared/loanapistatus.md)                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `submittedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `toPayAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Loan disbursement estimated date                                                              |
| `toRepayAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Loan reimbursement estimated date                                                             |
| `transferContractUrl`                                                                         | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |