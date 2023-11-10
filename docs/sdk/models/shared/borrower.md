# Borrower

Entity legally contracting the loan


## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `identifier`                                                                                | *string*                                                                                    | :heavy_check_mark:                                                                          | Legal identifier of the business, such as its SIRET in France.                              |
| `identifierType`                                                                            | [shared.APIPostLoanIdentifierType](../../../sdk/models/shared/apipostloanidentifiertype.md) | :heavy_minus_sign:                                                                          | Type of legal business identifier of the business, such as the SIRET in France.             |