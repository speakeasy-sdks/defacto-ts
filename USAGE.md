<!-- Start SDK Example Usage -->


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
    "123e62b5-ef5d-43b3-825e-9f0f1d4ec684",
  ],
  businessIdentifier: [
    "Denar",
  ],
  cursor: "minus",
  endDate: new Date("2023-02-13T03:15:50.495Z"),
  pageSize: 246412,
  startDate: new Date("2021-10-17T07:11:49.846Z"),
  status: [
    ListBillsStatus.Paid,
  ],
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->