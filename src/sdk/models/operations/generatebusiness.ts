/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { AxiosResponse } from "axios";

export enum Country {
    Fra = "FRA",
    Esp = "ESP",
    Nld = "NLD",
    Deu = "DEU",
    Bel = "BEL",
}

export class GenerateBusinessRequest extends SpeakeasyBase {
    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=country" })
    country?: Country;

    @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_borrower" })
    isBorrower?: boolean;
}

export class GenerateBusinessResponse extends SpeakeasyBase {
    @SpeakeasyMetadata()
    body?: Uint8Array;

    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;
}
