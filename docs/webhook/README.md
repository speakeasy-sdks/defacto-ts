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
import { CreateWebhookEventTypesEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.create({
  eventTypes: [
    CreateWebhookEventTypesEnum.LoanCANCELED,
    CreateWebhookEventTypesEnum.LoanDECLINED,
  ],
  name: "Donald MacGyver",
  toUrl: "beatae",
}).then((res: CreateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## delete

Delete a webhook subscription.

### Example Usage

```typescript
import { Defacto } from "defacto";
import { DeleteWebhookResponse } from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.delete({
  webhookId: "voluptatum",
}).then((res: DeleteWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

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
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.list().then((res: ListWebhooksResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```

## update


Update a webhook subscription.

⚠️ Our webhooks always call the POST method of the given url.

For more information on webhooks such as how to secure them, you can refer to our guide.



### Example Usage

```typescript
import { Defacto } from "defacto";
import { UpdateWebhookResponse } from "defacto/dist/sdk/models/operations";
import { CreateWebhookEventTypesEnum } from "defacto/dist/sdk/models/shared";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.webhook.update({
  createWebhook: {
    eventTypes: [
      CreateWebhookEventTypesEnum.CreditLimitUPDATED,
      CreateWebhookEventTypesEnum.PaymentINTRANSIT,
      CreateWebhookEventTypesEnum.PaymentINSTRUCTED,
    ],
    name: "Donald Williamson MD",
    toUrl: "pariatur",
  },
  webhookId: "debitis",
}).then((res: UpdateWebhookResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
