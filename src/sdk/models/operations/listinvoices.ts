/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum ListInvoicesStatus {
    ToSubmit = "TO_SUBMIT",
    Submitted = "SUBMITTED",
    ToEdit = "TO_EDIT",
    Verified = "VERIFIED",
    Deleted = "DELETED",
}

export class ListInvoicesRequest extends SpeakeasyBase {
    /**
     * Business identifier of the buyer, as used on the invoice. Can be name, vat_number, local country business identifier (e.g. SIREN, NIF, etc.)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=buyer" })
    buyer?: string[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
    cursor?: string;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=invoice_id" })
    invoiceId?: string[];

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
    pageSize?: number;

    /**
     * Business identifier of the seller, as used on the invoice. Can be name, vat_number, local country business identifier (e.g. SIREN, NIF, etc.)
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=seller" })
    seller?: string[];

    /**
     * TO_SUBMIT, SUBMITTED, TO_EDIT or VERIFIED TO_SUBMIT: the invoice is a draft, you can correct it and submit it when correct SUBMITTED: the invoice has been submitted and Defacto is verifying it TO_EDIT: the invoice has not been validated by Defacto. It should be edited before you can submit it again VERIFIED: the invoice has been verified by Defacto. A loan can now be requested for the invoice.
     */
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
    status?: ListInvoicesStatus[];
}

export class ListInvoicesResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    @SpeakeasyMetadata()
    contentType: string;

    @SpeakeasyMetadata()
    statusCode: number;

    @SpeakeasyMetadata()
    rawResponse?: AxiosResponse;
}
