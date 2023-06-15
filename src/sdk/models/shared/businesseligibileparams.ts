/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { BusinessIdentifier } from "./businessidentifier";
import { Expose, Type } from "class-transformer";

export enum BusinessEligibileParamsScenario {
    Ok = "OK",
    NotEligible = "NOT_ELIGIBLE",
}

export class BusinessEligibileParams extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "business_identifier" })
    @Type(() => BusinessIdentifier)
    businessIdentifier: BusinessIdentifier;

    @SpeakeasyMetadata()
    @Expose({ name: "scenario" })
    scenario: BusinessEligibileParamsScenario;
}
