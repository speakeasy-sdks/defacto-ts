# Payment
(*payment*)

### Available Operations

* [list](#list) - Get payments related to loans

## list

Get payments related to loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListPaymentsQueryParamStatus, PaymentMethod, PaymentType } from "defacto/dist/sdk/models/operations";

async function run() {
  const sdk = new Defacto({
    security: {
      bearer: "<YOUR_API_KEY_HERE>",
    },
  });

  const res = await sdk.payment.list({
    loanId: [
      "<value>",
    ],
    paymentMethod: [
      PaymentMethod.P2P,
    ],
    paymentType: [
      PaymentType.RepaymentNominal,
    ],
    references: [
      "<value>",
    ],
    status: [
      ListPaymentsQueryParamStatus.Failed,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
}

run();
```

### Parameters

| Parameter                                                                            | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `request`                                                                            | [operations.ListPaymentsRequest](../../sdk/models/operations/listpaymentsrequest.md) | :heavy_check_mark:                                                                   | The request object to use for the request.                                           |
| `config`                                                                             | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                         | :heavy_minus_sign:                                                                   | Available config options for making requests.                                        |


### Response

**Promise<[operations.ListPaymentsResponse](../../sdk/models/operations/listpaymentsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
