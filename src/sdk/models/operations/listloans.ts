/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum ListLoansLoanTypeEnum {
  InvoiceBasedFinancing = "INVOICE_BASED_FINANCING",
  WalletFinancing = "WALLET_FINANCING",
}

export enum ListLoansStatusEnum {
  Submitted = "SUBMITTED",
  ToValidate = "TO_VALIDATE",
  Declined = "DECLINED",
  Validated = "VALIDATED",
  Canceled = "CANCELED",
  Scheduled = "SCHEDULED",
  Initiated = "INITIATED",
  ToRepay = "TO_REPAY",
  ToRepayFees = "TO_REPAY_FEES",
  Overdue = "OVERDUE",
  Closed = "CLOSED",
  IssueDetected = "ISSUE_DETECTED",
  Deleted = "DELETED",
}

export class ListLoansRequest extends SpeakeasyBase {
  /**
   * Search by borrower company number (e.g. SIREN or NIF)
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=borrower",
  })
  borrower?: string[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=cursor",
  })
  cursor?: string;

  /**
   * Returns loans for which the guarantee was called
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=guarantee_called",
  })
  guaranteeCalled?: boolean;

  /**
   * Entity legally responsible to payback the loan
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=guarantor",
  })
  guarantor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=loan_type",
  })
  loanType?: ListLoansLoanTypeEnum[];

  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=page_size",
  })
  pageSize?: number;

  /**
   * Loan statuses. Possible values: ['SUBMITTED', 'TO_VALIDATE', 'DECLINED', 'VALIDATED', 'CANCELED', 'SCHEDULED', 'INITIATED', 'TO_REPAY', 'TO_REPAY_FEES', 'OVERDUE', 'CLOSED', 'ISSUE_DETECTED', 'DELETED']
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=status",
  })
  status?: ListLoansStatusEnum[];

  /**
   * Returns loans where pay_at field is greater or equal to this date.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=to_pay_at_from",
  })
  toPayAtFrom?: Date;

  /**
   * Returns loans where pay_at field is lower to this date.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=to_pay_at_to",
  })
  toPayAtTo?: Date;

  /**
   * Returns loans where repay_at field is greater or equal to this date.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=to_repay_at_from",
  })
  toRepayAtFrom?: Date;

  /**
   * Returns loans where repay_at field is lower to this date.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=to_repay_at_to",
  })
  toRepayAtTo?: Date;

  /**
   * Shorthand alias for to_repay_at_from=now() and to_repay_at_to=now().plus(x, 'days'). Mutually exclusive with to_repay_at_from & to_repay_at_to.
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=to_repay_at_within_days",
  })
  toRepayAtWithinDays?: number;
}

export class ListLoansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}