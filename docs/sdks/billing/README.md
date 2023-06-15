# billing

### Available Operations

* [listBills](#listbills) - List your fees invoices (i.e: your Defacto bill) for the loans you performed on the platform. By default, this endpoint only returns your own bills, but you may request bills for your own specific borrowers (with a business identifier or ID) depending on your contract type.
* [sendBill](#sendbill) - 
This endpoint enables you to notify Defacto when you sent the bill for the fees of the loans to your user.
A bill should be sent to the user only when its status is VALIDATED (see GET /bills endpoint).

It is very important to use this endpoint so that Defacto can proceed to a recollection process
that will be fair for our users.

This endpoint is useful only for partners who send the bill themselves.
By default the bills are sent the the payers of the fees by Defacto.
If you need to send them by yourself please get in touch with us.


## listBills

List your fees invoices (i.e: your Defacto bill) for the loans you performed on the platform. By default, this endpoint only returns your own bills, but you may request bills for your own specific borrowers (with a business identifier or ID) depending on your contract type.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListBillsResponse, ListBillsStatus } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.billing.listBills({
  businessId: [
    "1a3a2fa9-4677-4392-91aa-52c3f5ad019d",
    "a1ffe78f-097b-4007-8f15-471b5e6e13b9",
    "9d488e1e-91e4-450a-92ab-d44269802d50",
    "2a94bb4f-63c9-469e-9a3e-fa77dfb14cd6",
  ],
  businessIdentifier: [
    "laborum",
    "accusamus",
  ],
  cursor: "non",
  endDate: new Date("2022-05-17T08:24:52.669Z"),
  pageSize: 881736,
  startDate: new Date("2020-12-03T16:16:10.882Z"),
  status: [
    ListBillsStatus.ToPay,
    ListBillsStatus.ToPay,
    ListBillsStatus.ToPay,
  ],
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                  | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `request`                                                                  | [operations.ListBillsRequest](../../models/operations/listbillsrequest.md) | :heavy_check_mark:                                                         | The request object to use for the request.                                 |
| `config`                                                                   | [AxiosRequestConfig](https://axios-http.com/docs/req_config)               | :heavy_minus_sign:                                                         | Available config options for making requests.                              |


### Response

**Promise<[operations.ListBillsResponse](../../models/operations/listbillsresponse.md)>**


## sendBill


This endpoint enables you to notify Defacto when you sent the bill for the fees of the loans to your user.
A bill should be sent to the user only when its status is VALIDATED (see GET /bills endpoint).

It is very important to use this endpoint so that Defacto can proceed to a recollection process
that will be fair for our users.

This endpoint is useful only for partners who send the bill themselves.
By default the bills are sent the the payers of the fees by Defacto.
If you need to send them by yourself please get in touch with us.


### Example Usage

```typescript
import { Defacto } from "defacto";
import { SendBillResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.billing.sendBill("deleniti", {
  sentOn: new Date("2022-04-23T13:35:30.978Z"),
  toEmailAddresses: [
    "Henry.Mosciski@yahoo.com",
    "Janice_Gutkowski28@gmail.com",
    "Geraldine.Mosciski87@gmail.com",
  ],
}).then((res: SendBillResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `billId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `apiBillSentByPartnerRequest`                                                            | [shared.APIBillSentByPartnerRequest](../../models/shared/apibillsentbypartnerrequest.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SendBillResponse](../../models/operations/sendbillresponse.md)>**

