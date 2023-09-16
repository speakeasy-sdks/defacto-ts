# Payment

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
  cursor: "aliquam",
  fromAccountId: "fugit",
  fromDate: new Date("2022-10-05T22:09:33.495Z"),
  id: "41aac366-c8dd-46b1-8429-07474778a7bd",
  isReconciled: false,
  loanId: [
    "ut",
  ],
  pageSize: 433439,
  paymentMethod: [
    ListPaymentsPaymentMethod.Sct,
  ],
  paymentType: [
    ListPaymentsPaymentType.Chargeback,
  ],
  references: [
    "eos",
  ],
  status: [
    ListPaymentsStatus.Failed,
  ],
  toAccountId: "quisquam",
  toDate: new Date("2022-12-11T06:00:38.230Z"),
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

