/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { APIDraftableInvoiceCreation } from "./apidraftableinvoicecreation";

export class GeneratedInvoice extends SpeakeasyBase {
    @SpeakeasyMetadata()
    invoiceCreationPayload: APIDraftableInvoiceCreation;

    @SpeakeasyMetadata()
    pdfDownloadUrl: string;
}
