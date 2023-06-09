/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

export enum WebhookEventTypes {
    CreditLinePOOLAMOUNTUPDATED = "CreditLine.POOL_AMOUNT_UPDATED",
    CreditLineCREATED = "CreditLine.CREATED",
    CreditLimitUPDATED = "CreditLimit.UPDATED",
    LoanSUBMITTED = "Loan.SUBMITTED",
    LoanVALIDATED = "Loan.VALIDATED",
    LoanSCHEDULED = "Loan.SCHEDULED",
    LoanINITIATED = "Loan.INITIATED",
    LoanCANCELED = "Loan.CANCELED",
    LoanDECLINED = "Loan.DECLINED",
    LoanTOREPAY = "Loan.TO_REPAY",
    LoanTOREPAYFEES = "Loan.TO_REPAY_FEES",
    LoanOVERDUE = "Loan.OVERDUE",
    LoanISSUEDETECTED = "Loan.ISSUE_DETECTED",
    LoanCLOSED = "Loan.CLOSED",
    LoanDELETED = "Loan.DELETED",
    PaymentSCHEDULED = "Payment.SCHEDULED",
    PaymentINSTRUCTED = "Payment.INSTRUCTED",
    PaymentINTRANSIT = "Payment.IN_TRANSIT",
    PaymentPAID = "Payment.PAID",
    PaymentCANCELED = "Payment.CANCELED",
    PaymentFAILED = "Payment.FAILED",
    InvoiceSUBMITTED = "Invoice.SUBMITTED",
    InvoiceTOEDIT = "Invoice.TO_EDIT",
    InvoiceVERIFIED = "Invoice.VERIFIED",
    InvoiceDELETED = "Invoice.DELETED",
}

export class Webhook extends SpeakeasyBase {
    @SpeakeasyMetadata()
    eventTypes: WebhookEventTypes[];

    @SpeakeasyMetadata()
    id?: any;

    @SpeakeasyMetadata()
    name: string;

    @SpeakeasyMetadata()
    toUrl: string;
}
