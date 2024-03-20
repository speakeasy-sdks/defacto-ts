/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../../sdk/types";

/**
 * Address of the person.
 */
export class EmployeeAddress extends SpeakeasyBase {
    @SpeakeasyMetadata()
    addressLine1?: string;

    @SpeakeasyMetadata()
    addressLine2?: string;

    @SpeakeasyMetadata()
    city?: string;

    @SpeakeasyMetadata()
    country?: string;

    @SpeakeasyMetadata()
    postalCode?: string;

    @SpeakeasyMetadata()
    state?: string;
}

/**
 * Birth place of the person.
 */
export class EmployeeBirthPlace extends SpeakeasyBase {
    /**
     * City where the person was born.
     */
    @SpeakeasyMetadata()
    city?: string;

    /**
     * Country where the person was born. Must be a ISO 3166 alpha-3 country code (e.g. FRA).
     */
    @SpeakeasyMetadata()
    country?: string;
}

export enum Role {
    Director = "DIRECTOR",
    NonDirector = "NON_DIRECTOR",
}

export class Employee extends SpeakeasyBase {
    /**
     * Address of the person.
     */
    @SpeakeasyMetadata()
    address?: EmployeeAddress;

    /**
     * Birth date of the person.
     */
    @SpeakeasyMetadata()
    birthDate?: RFCDate;

    /**
     * Birth place of the person.
     */
    @SpeakeasyMetadata()
    birthPlace?: EmployeeBirthPlace;

    @SpeakeasyMetadata()
    businessEmail?: string;

    /**
     * PhoneNumber
     */
    @SpeakeasyMetadata()
    businessPhoneNumber?: string;

    /**
     * The first name of the person.
     */
    @SpeakeasyMetadata()
    firstName?: string;

    @SpeakeasyMetadata()
    id?: any;

    /**
     * The first name of the person.
     */
    @SpeakeasyMetadata()
    lastName?: string;

    /**
     * Nationality of the person. Must be a ISO 3166 alpha-3 country code (e.g. FRA).
     */
    @SpeakeasyMetadata()
    nationality?: string;

    @SpeakeasyMetadata()
    role?: Role;

    /**
     * Title of the person (e.g. M., Dr., etc.)
     */
    @SpeakeasyMetadata()
    title?: string;
}
