/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class SendBillRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bill_id" })
    billId: string;

    @SpeakeasyMetadata({ data: "request, media_type=application/json" })
    apiBillSentByPartnerRequest?: shared.APIBillSentByPartnerRequest;
}

export class SendBillResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
