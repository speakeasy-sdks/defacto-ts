# APIPatchInvoiceToAccount

Beneficiary account as mentioned on the invoice. Note that this does not determine the account where the loan payment will be made.That is done separately when calling the POST /loans endpoint.


## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `accountHolder`                                                                                             | [shared.APIPatchInvoiceAccountHolder](../../../sdk/models/shared/apipatchinvoiceaccountholder.md)           | :heavy_minus_sign:                                                                                          | The business owning the account.                                                                            |
| `accountNumber`                                                                                             | *string*                                                                                                    | :heavy_check_mark:                                                                                          | The account identifier. Only IBANs are supported at the moment.                                             |
| `accountNumberType`                                                                                         | [shared.APIPatchInvoiceAccountNumberType](../../../sdk/models/shared/apipatchinvoiceaccountnumbertype.md)   | :heavy_minus_sign:                                                                                          | The type of account number (e.g. IBAN).                                                                     |
| `bankIdentifier`                                                                                            | *string*                                                                                                    | :heavy_minus_sign:                                                                                          | The identifier of the bank.                                                                                 |
| `bankIdentifierType`                                                                                        | [shared.APIPatchInvoiceBankIdentifierType](../../../sdk/models/shared/apipatchinvoicebankidentifiertype.md) | :heavy_minus_sign:                                                                                          | The type of bank identifier (e.g. BIC).                                                                     |