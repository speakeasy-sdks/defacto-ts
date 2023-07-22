/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { Expose, Transform } from "class-transformer";

export class APIBillSentByPartnerRequest extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sent_on" })
    @Transform(({ value }) => new Date(value), { toClassOnly: true })
    sentOn: Date;

    @SpeakeasyMetadata()
    @Expose({ name: "to_email_addresses" })
    toEmailAddresses: string[];
}
