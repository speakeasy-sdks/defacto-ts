# Payment
(*payment*)

### Available Operations

* [list](#list) - Get payments related to loans

## list

Get payments related to loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  ListPaymentsPaymentMethod,
  ListPaymentsPaymentType,
  ListPaymentsResponse,
  ListPaymentsStatus,
} from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.payment.list({
  cursor: "eos",
  fromAccountId: "praesentium",
  fromDate: new Date("2022-09-28T10:00:45.702Z"),
  id: "0ab3cdca-4251-4904-a523-c7e0bc7178e4",
  isReconciled: false,
  loanId: [
    "odio",
  ],
  pageSize: 577543,
  paymentMethod: [
    ListPaymentsPaymentMethod.Sct,
  ],
  paymentType: [
    ListPaymentsPaymentType.PaymentProviderFees,
  ],
  references: [
    "dolores",
  ],
  status: [
    ListPaymentsStatus.Instructed,
  ],
  toAccountId: "molestiae",
  toDate: new Date("2022-03-20T23:14:37.473Z"),
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                        | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `request`                                                                        | [operations.ListPaymentsRequest](../../models/operations/listpaymentsrequest.md) | :heavy_check_mark:                                                               | The request object to use for the request.                                       |
| `config`                                                                         | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                     | :heavy_minus_sign:                                                               | Available config options for making requests.                                    |


### Response

**Promise<[operations.ListPaymentsResponse](../../models/operations/listpaymentsresponse.md)>**

