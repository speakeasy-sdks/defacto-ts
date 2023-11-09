# LoanTo

Bank account receiving the money of the loan


## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `accountNumber`                                                                                           | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The account identifier. Only IBANs are supported at the moment.                                           |
| `accountNumberType`                                                                                       | [shared.LoanAPISchemasAccountNumberType](../../../sdk/models/shared/loanapischemasaccountnumbertype.md)   | :heavy_check_mark:                                                                                        | The type of account number (e.g. IBAN).                                                                   |
| `bankIdentifier`                                                                                          | *string*                                                                                                  | :heavy_check_mark:                                                                                        | The identifier of the bank.                                                                               |
| `bankIdentifierType`                                                                                      | [shared.LoanAPISchemasBankIdentifierType](../../../sdk/models/shared/loanapischemasbankidentifiertype.md) | :heavy_check_mark:                                                                                        | The type of bank identifier (e.g. BIC).                                                                   |