# ToAccountDetails


## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `accountNumber`                                                                                   | *string*                                                                                          | :heavy_check_mark:                                                                                | The account identifier. Only IBANs are supported at the moment.                                   |
| `accountNumberType`                                                                               | [shared.APIInvoiceAccountNumberType](../../../sdk/models/shared/apiinvoiceaccountnumbertype.md)   | :heavy_check_mark:                                                                                | The type of account number (e.g. IBAN).                                                           |
| `bankIdentifier`                                                                                  | *string*                                                                                          | :heavy_check_mark:                                                                                | The identifier of the bank.                                                                       |
| `bankIdentifierType`                                                                              | [shared.APIInvoiceBankIdentifierType](../../../sdk/models/shared/apiinvoicebankidentifiertype.md) | :heavy_check_mark:                                                                                | The type of bank identifier (e.g. BIC).                                                           |