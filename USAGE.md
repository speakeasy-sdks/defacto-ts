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
    "89bd9d8d-69a6-474e-8f46-7cc8796ed151",
  ],
  businessIdentifier: [
    "deserunt",
  ],
  cursor: "perferendis",
  endDate: new Date("2022-03-03T02:15:00.468Z"),
  pageSize: 957156,
  startDate: new Date("2022-07-31T07:34:52.790Z"),
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