# payment

### Available Operations

* [list](#list) - Get payments related to loans

## list

Get payments related to loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  ListPaymentsPaymentMethodEnum,
  ListPaymentsPaymentTypeEnum,
  ListPaymentsResponse,
  ListPaymentsStatusEnum,
} from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.payment.list({
  cursor: "aliquid",
  fromAccountId: "porro",
  fromDate: new Date("2022-10-15T18:57:46.028Z"),
  id: "2ca3aed0-1179-4963-92fd-e04771778ff6",
  isReconciled: false,
  loanId: [
    "fugiat",
  ],
  pageSize: 39650,
  paymentMethod: [
    ListPaymentsPaymentMethodEnum.Sct,
  ],
  paymentType: [
    ListPaymentsPaymentTypeEnum.Extra,
    ListPaymentsPaymentTypeEnum.Extra,
  ],
  references: [
    "aliquid",
  ],
  status: [
    ListPaymentsStatusEnum.Instructed,
  ],
  toAccountId: "sunt",
  toDate: new Date("2022-02-22T06:49:26.369Z"),
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
