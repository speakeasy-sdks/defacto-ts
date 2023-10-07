# Payment
(*payment*)

### Available Operations

* [list](#list) - Get payments related to loans

## list

Get payments related to loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListPaymentsPaymentMethod, ListPaymentsPaymentType, ListPaymentsStatus } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.payment.list({
    loanId: [
      "Bicycle",
    ],
    paymentMethod: [
      ListPaymentsPaymentMethod.DirectDebit,
    ],
    paymentType: [
      ListPaymentsPaymentType.RevenueShare,
    ],
    references: [
      "Canada",
    ],
    status: [
      ListPaymentsStatus.Paid,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListPaymentsRequest](../../models/operations/listpaymentsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListPaymentsResponse](../../models/operations/listpaymentsresponse.md)>**

