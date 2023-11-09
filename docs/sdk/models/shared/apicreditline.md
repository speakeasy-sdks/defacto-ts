# APICreditLine


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `balanceAvailable`                                                                            | *number*                                                                                      | :heavy_minus_sign:                                                                            | Remaining amount that can be loaned.                                                          |
| `balancePending`                                                                              | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `contractNumber`                                                                              | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `currency`                                                                                    | [shared.Currency](../../../sdk/models/shared/currency.md)                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultBorrower`                                                                             | [shared.DefaultBorrower](../../../sdk/models/shared/defaultborrower.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultBorrowerStrategy`                                                                     | [shared.DefaultBorrowerStrategy](../../../sdk/models/shared/defaultborrowerstrategy.md)       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultGuarantor`                                                                            | [shared.DefaultGuarantor](../../../sdk/models/shared/defaultguarantor.md)                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultLoanFrom`                                                                             | [shared.DefaultLoanFrom](../../../sdk/models/shared/defaultloanfrom.md)                       | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultRepaymentFrom`                                                                        | [shared.DefaultRepaymentFrom](../../../sdk/models/shared/defaultrepaymentfrom.md)             | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultRepaymentMethod`                                                                      | [shared.DefaultRepaymentMethod](../../../sdk/models/shared/defaultrepaymentmethod.md)         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `defaultRepaymentTo`                                                                          | [shared.DefaultRepaymentTo](../../../sdk/models/shared/defaultrepaymentto.md)                 | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `distribution`                                                                                | [shared.Distribution](../../../sdk/models/shared/distribution.md)                             | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `feesDailyRate`                                                                               | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `feesInterestDailyRate`                                                                       | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `feesOperatingDailyRate`                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `feesPayer`                                                                                   | [shared.FeesPayer](../../../sdk/models/shared/feespayer.md)                                   | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `id`                                                                                          | *any*                                                                                         | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `poolAmount`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Maximum amount that can be loaned.                                                            |
| `signedAt`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `vat`                                                                                         | *number*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |