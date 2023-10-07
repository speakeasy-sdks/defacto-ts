<!-- Start SDK Example Usage -->


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
      "Denar",
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
<!-- End SDK Example Usage -->