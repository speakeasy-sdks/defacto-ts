# Billing
(*billing*)

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
import { ListBillsStatus } from "defacto/dist/sdk/models/operations";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });

  const res = await sdk.billing.listBills({
    businessId: [
      "123e62b5-ef5d-43b3-825e-9f0f1d4ec684",
    ],
    businessIdentifier: [
      "string",
    ],
    status: [
      ListBillsStatus.SentToPayer,
    ],
  });

  if (res.statusCode == 200) {
    // handle response
  }
})();
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
import { SendBillRequest } from "defacto/dist/sdk/models/operations";
import { APIBillSentByPartnerRequest } from "defacto/dist/sdk/models/shared";

(async() => {
  const sdk = new Defacto({
    security: {
      bearer: "",
    },
  });
const billId: string = "string";
const apiBillSentByPartnerRequest: APIBillSentByPartnerRequest = {
  sentOn: new Date("2023-05-31T06:58:02.853Z"),
  toEmailAddresses: [
    "Nella.Frami@hotmail.com",
  ],
};

  const res = await sdk.billing.sendBill(billId, apiBillSentByPartnerRequest);

  if (res.statusCode == 200) {
    // handle response
  }
})();
```

### Parameters

| Parameter                                                                                | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `billId`                                                                                 | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `apiBillSentByPartnerRequest`                                                            | [shared.APIBillSentByPartnerRequest](../../models/shared/apibillsentbypartnerrequest.md) | :heavy_minus_sign:                                                                       | N/A                                                                                      |
| `config`                                                                                 | [AxiosRequestConfig](https://axios-http.com/docs/req_config)                             | :heavy_minus_sign:                                                                       | Available config options for making requests.                                            |


### Response

**Promise<[operations.SendBillResponse](../../models/operations/sendbillresponse.md)>**

