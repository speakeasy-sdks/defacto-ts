# ListInvoicesRequest


## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `buyer`                                                                                                                                                                                                                                                                                                                                                                                                      | *string*[]                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                           | Business identifier of the buyer, as used on the invoice. Can be name, vat_number, local country business identifier (e.g. SIREN, NIF, etc.)                                                                                                                                                                                                                                                                 |
| `cursor`                                                                                                                                                                                                                                                                                                                                                                                                     | *string*                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                          |
| `invoiceId`                                                                                                                                                                                                                                                                                                                                                                                                  | *string*[]                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                          |
| `pageSize`                                                                                                                                                                                                                                                                                                                                                                                                   | *number*                                                                                                                                                                                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                           | N/A                                                                                                                                                                                                                                                                                                                                                                                                          |
| `seller`                                                                                                                                                                                                                                                                                                                                                                                                     | *string*[]                                                                                                                                                                                                                                                                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                           | Business identifier of the seller, as used on the invoice. Can be name, vat_number, local country business identifier (e.g. SIREN, NIF, etc.)                                                                                                                                                                                                                                                                |
| `status`                                                                                                                                                                                                                                                                                                                                                                                                     | [ListInvoicesStatus](../../models/operations/listinvoicesstatus.md)[]                                                                                                                                                                                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                           | TO_SUBMIT, SUBMITTED, TO_EDIT or VERIFIED TO_SUBMIT: the invoice is a draft, you can correct it and submit it when correct SUBMITTED: the invoice has been submitted and Defacto is verifying it TO_EDIT: the invoice has not been validated by Defacto. It should be edited before you can submit it again VERIFIED: the invoice has been verified by Defacto. A loan can now be requested for the invoice. |