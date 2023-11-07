# EligibilityResponse


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `isEligible`                                                                       | *boolean*                                                                          | :heavy_check_mark:                                                                 | Say if the eligibility check accepted the request or not.                          |
| `maxAmount`                                                                        | *number*                                                                           | :heavy_minus_sign:                                                                 | Maximum amount that can be lent, in cents.                                         |
| `reasons`                                                                          | [shared.EligibilityDenialReason](../../models/shared/eligibilitydenialreason.md)[] | :heavy_minus_sign:                                                                 | Maximum amount that can be lent, in cents.                                         |