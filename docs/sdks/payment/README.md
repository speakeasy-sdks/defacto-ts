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
  cursor: "Northeast Metal Canada",
  fromAccountId: "Data Response West",
  fromDate: new Date("2023-02-26T13:00:25.189Z"),
  id: "<ID>",
  isReconciled: false,
  loanId: [
    "boil",
  ],
  pageSize: 483371,
  paymentMethod: [
    ListPaymentsPaymentMethod.DirectDebit,
  ],
  paymentType: [
    ListPaymentsPaymentType.Returned,
  ],
  references: [
    "Designer",
  ],
  status: [
    ListPaymentsStatus.Failed,
  ],
  toAccountId: "Paradigm",
  toDate: new Date("2021-01-09T04:15:41.822Z"),
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

