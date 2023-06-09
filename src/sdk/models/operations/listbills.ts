/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum ListBillsStatus {
    Validated = "VALIDATED",
    SentToPayer = "SENT_TO_PAYER",
    ToPay = "TO_PAY",
    Paid = "PAID",
}

export class ListBillsRequest extends SpeakeasyBase {
    /**
     * Return bills for these business ids.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=business_id" })
    businessId?: string[];

    /**
     * Return bills for theses business identifiers, such as its SIREN in France.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=business_identifier" })
    businessIdentifier?: string[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    /**
     * Returns bills where end_date field is lower to this date.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end_date" })
    endDate?: Date;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    /**
     * Returns bills where start_date field is greater or equal to this date.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start_date" })
    startDate?: Date;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: ListBillsStatus[];
}

export class ListBillsResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
