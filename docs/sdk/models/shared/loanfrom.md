# LoanFrom

Bank account used to transfer the amount of the loan to the borrower


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `accountNumber`                                                                             | *string*                                                                                    | :heavy_check_mark:                                                                          | The account identifier. Only IBANs are supported at the moment.                             |
| `accountNumberType`                                                                         | [shared.LoanAPIAccountNumberType](../../../sdk/models/shared/loanapiaccountnumbertype.md)   | :heavy_check_mark:                                                                          | The type of account number (e.g. IBAN).                                                     |
| `bankIdentifier`                                                                            | *string*                                                                                    | :heavy_check_mark:                                                                          | The identifier of the bank.                                                                 |
| `bankIdentifierType`                                                                        | [shared.LoanAPIBankIdentifierType](../../../sdk/models/shared/loanapibankidentifiertype.md) | :heavy_check_mark:                                                                          | The type of bank identifier (e.g. BIC).                                                     |