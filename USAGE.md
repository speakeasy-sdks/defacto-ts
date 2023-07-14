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
    "9bd9d8d6-9a67-44e0-b467-cc8796ed151a",
    "05dfc2dd-f7cc-478c-a1ba-928fc816742c",
    "b7392059-2939-46fe-a759-6eb10faaa235",
  ],
  businessIdentifier: [
    "nobis",
  ],
  cursor: "enim",
  endDate: new Date("2022-04-10T11:47:13.463Z"),
  pageSize: 325047,
  startDate: new Date("2022-12-03T22:47:10.600Z"),
  status: [
    ListBillsStatus.ToPay,
    ListBillsStatus.Paid,
  ],
}).then((res: ListBillsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
<!-- End SDK Example Usage -->