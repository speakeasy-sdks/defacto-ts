/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoanPaymentApi } from "./loanpaymentapi";

export class PaymentRelationApi extends SpeakeasyBase {
    @SpeakeasyMetadata()
    invoices?: string[];

    @SpeakeasyMetadata({ elemType: LoanPaymentApi })
    loans?: LoanPaymentApi[];
}
