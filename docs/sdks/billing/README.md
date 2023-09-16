# Billing

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
    "df7cc78c-a1ba-4928-bc81-6742cb739205",
  ],
  businessIdentifier: [
    "natus",
  ],
  cursor: "sed",
  endDate: new Date("2022-07-22T16:55:44.795Z"),
  pageSize: 616934,
  startDate: new Date("2022-01-21T12:46:00.641Z"),
  status: [
    ListBillsStatus.Paid,
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
import { SendBillRequest, SendBillResponse } from "defacto/dist/sdk/models/operations";
import { APIBillSentByPartnerRequest } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});
const billId: string = "fuga";
const apiBillSentByPartnerRequest: APIBillSentByPartnerRequest = {
  sentOn: new Date("2022-08-22T18:42:38.160Z"),
  toEmailAddresses: [
    "Humberto.Turcotte6@yahoo.com",
  ],
};

sdk.billing.sendBill(billId, apiBillSentByPartnerRequest).then((res: SendBillResponse) => {
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

