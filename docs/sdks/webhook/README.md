# webhook

### Available Operations

* [create](#create) - 
Create a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.


* [delete](#delete) - Delete a webhook subscription.
* [list](#list) - 
List your webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.


* [update](#update) - 
Update a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.



## create


Create a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.



### Example Usage

```typescript
import { Defacto } from "defacto";
import { CreateWebhookResponse } from "defacto/dist/sdk/models/operations";
import { CreateWebhookEventTypes } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.webhook.create({
  eventTypes: [
    CreateWebhookEventTypes.CreditLinePOOLAMOUNTUPDATED,
  ],
  name: "Darin Jakubowski",
  toUrl: "minus",
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `request`                                                    | [shared.CreateWebhook](../../models/shared/createwebhook.md) | :heavy_check_mark:                                           | The request object to use for the request.                   |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.CreateWebhookResponse](../../models/operations/createwebhookresponse.md)>**


## delete

Delete a webhook subscription.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { DeleteWebhookResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.webhook.delete("nemo").then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.DeleteWebhookResponse](../../models/operations/deletewebhookresponse.md)>**


## list


List your webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.



### Example Usage

```typescript
import { Defacto } from "defacto";
import { ListWebhooksResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.webhook.list().then((res: ListWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.ListWebhooksResponse](../../models/operations/listwebhooksresponse.md)>**


## update


Update a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.



### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateWebhookResponse } from "defacto/dist/sdk/models/operations";
import { CreateWebhookEventTypes } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "",
  },
});

sdk.webhook.update("asperiores", {
  eventTypes: [
    CreateWebhookEventTypes.LoanDECLINED,
  ],
  name: "Desiree Leannon",
  toUrl: "nam",
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

### Parameters

| Parameter                                                    | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `webhookId`                                                  | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          |
| `createWebhook`                                              | [shared.CreateWebhook](../../models/shared/createwebhook.md) | :heavy_minus_sign:                                           | N/A                                                          |
| `config`                                                     | [AxiosRequestConfig](https://axios-http.com/docs/req_config) | :heavy_minus_sign:                                           | Available config options for making requests.                |


### Response

**Promise<[operations.UpdateWebhookResponse](../../models/operations/updatewebhookresponse.md)>**

