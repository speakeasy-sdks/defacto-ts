/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { LoanApiEvent } from "./loanapievent";

export class TypedApiPage3 extends SpeakeasyBase {
  @SpeakeasyMetadata()
  count: number;

  @SpeakeasyMetadata({ elemType: LoanApiEvent })
  data?: LoanApiEvent[];

  @SpeakeasyMetadata()
  nextPage?: string;

  @SpeakeasyMetadata()
  pageSize: number;
}