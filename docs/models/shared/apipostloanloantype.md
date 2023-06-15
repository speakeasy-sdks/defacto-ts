# APIPostLoanLoanType

Type of loan to request. For example, INVOICE_BASED_FINANCING to finance invoices. Depending on the value of this field, another field with a name matching this value may be to complete. For example, for INVOICE_BASED_FINANCING either invoice_ids or invoices should be set.For WALLET_FINANCING, no specific field needs to be set.


## Values

| Name                    | Value                   |
| ----------------------- | ----------------------- |
| `InvoiceBasedFinancing` | INVOICE_BASED_FINANCING |
| `WalletFinancing`       | WALLET_FINANCING        |