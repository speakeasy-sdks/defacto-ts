# DefaultLoanFrom


## Fields

| Field                                                                                                                                               | Type                                                                                                                                                | Required                                                                                                                                            | Description                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `accountNumber`                                                                                                                                     | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The account identifier. Only IBANs are supported at the moment.                                                                                     |
| `accountNumberType`                                                                                                                                 | [shared.APICreditLineSchemasDefaultLoanFromAccountNumberType](../../../sdk/models/shared/apicreditlineschemasdefaultloanfromaccountnumbertype.md)   | :heavy_check_mark:                                                                                                                                  | The type of account number (e.g. IBAN).                                                                                                             |
| `bankIdentifier`                                                                                                                                    | *string*                                                                                                                                            | :heavy_check_mark:                                                                                                                                  | The identifier of the bank.                                                                                                                         |
| `bankIdentifierType`                                                                                                                                | [shared.APICreditLineSchemasDefaultLoanFromBankIdentifierType](../../../sdk/models/shared/apicreditlineschemasdefaultloanfrombankidentifiertype.md) | :heavy_check_mark:                                                                                                                                  | The type of bank identifier (e.g. BIC).                                                                                                             |