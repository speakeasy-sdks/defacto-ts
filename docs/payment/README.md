# payment

### Available Operations

* [list](#list) - Get payments related to loans

## list

Get payments related to loans

### Example Usage

```typescript
import { Defacto } from "defacto";
import {
  ListPaymentsPaymentMethod,
  ListPaymentsPaymentType,
  ListPaymentsResponse,
  ListPaymentsStatus,
} from "defacto/dist/sdk/models/operations";

const sdk = new Defacto({
  security: {
    bearer: "YOUR_API_KEY_HERE",
  },
});

sdk.payment.list({
  cursor: "ducimus",
  fromAccountId: "natus",
  fromDate: new Date("2022-03-27T19:38:57.457Z"),
  id: "312fde04-7717-478f-b61d-017476360a15",
  isReconciled: false,
  loanId: [
    "expedita",
    "aliquid",
    "officia",
    "suscipit",
  ],
  pageSize: 399161,
  paymentMethod: [
    ListPaymentsPaymentMethod.Sct,
  ],
  paymentType: [
    ListPaymentsPaymentType.Returned,
    ListPaymentsPaymentType.RevenueShare,
  ],
  references: [
    "error",
  ],
  status: [
    ListPaymentsStatus.Paid,
    ListPaymentsStatus.Instructed,
    ListPaymentsStatus.Instructed,
    ListPaymentsStatus.InTransit,
  ],
  toAccountId: "ad",
  toDate: new Date("2022-05-15T03:49:32.304Z"),
}).then((res: ListPaymentsResponse) => {
  if (res.statusCode == 200) {
    // handle response
  }
});
```
