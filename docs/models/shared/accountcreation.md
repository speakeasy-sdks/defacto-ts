# AccountCreation


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `accountHolder`                                                                               | [AccountCreationAccountHolder](../../models/shared/accountcreationaccountholder.md)           | :heavy_minus_sign:                                                                            | The business owning the account.                                                              |
| `accountNumber`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The account identifier. Only IBANs are supported at the moment.                               |
| `accountNumberType`                                                                           | [AccountCreationAccountNumberType](../../models/shared/accountcreationaccountnumbertype.md)   | :heavy_minus_sign:                                                                            | The type of account number (e.g. IBAN).                                                       |
| `bankIdentifier`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | The identifier of the bank.                                                                   |
| `bankIdentifierType`                                                                          | [AccountCreationBankIdentifierType](../../models/shared/accountcreationbankidentifiertype.md) | :heavy_minus_sign:                                                                            | The type of bank identifier (e.g. BIC).                                                       |