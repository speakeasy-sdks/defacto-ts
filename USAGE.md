<!-- Start SDK Example Usage [usage] -->
```typescript
import { Defacto } from "defacto";
import { Status } from "defacto/dist/sdk/models/operations";

async function run() {
    const sdk = new Defacto({
        security: {
            bearer: "<YOUR_API_KEY_HERE>",
        },
    });

    const res = await sdk.billing.listBills({
        businessId: ["123e62b5-ef5d-43b3-825e-9f0f1d4ec684"],
        businessIdentifier: ["string"],
        status: [Status.SentToPayer],
    });

    if (res.statusCode == 200) {
        // handle response
    }
}

run();

```
<!-- End SDK Example Usage [usage] -->