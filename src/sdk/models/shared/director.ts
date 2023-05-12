/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { RFCDate } from "../../types";
import { Expose, Transform, Type } from "class-transformer";

/**
 * Address of the person.
 */
export class DirectorAddress extends SpeakeasyBase {
  @SpeakeasyMetadata()
  @Expose({ name: "address_line_1" })
  addressLine1?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "address_line_2" })
  addressLine2?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country: string;

  @SpeakeasyMetadata()
  @Expose({ name: "postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata()
  @Expose({ name: "state" })
  state?: string;
}

/**
 * Birth place of the person.
 */
export class DirectorBirthPlace extends SpeakeasyBase {
  /**
   * City where the person was born.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "city" })
  city?: string;

  /**
   * Country where the person was born. Must be a ISO 3166 alpha-3 country code (e.g. FRA).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "country" })
  country?: string;
}

export class Director extends SpeakeasyBase {
  /**
   * Address of the person.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "address" })
  @Type(() => DirectorAddress)
  address?: DirectorAddress;

  /**
   * Birth date of the person.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "birth_date" })
  @Transform(({ value }) => new RFCDate(value), { toClassOnly: true })
  birthDate?: RFCDate;

  /**
   * Birth place of the person.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "birth_place" })
  @Type(() => DirectorBirthPlace)
  birthPlace?: DirectorBirthPlace;

  @SpeakeasyMetadata()
  @Expose({ name: "business_email" })
  businessEmail?: string;

  /**
   * PhoneNumber
   */
  @SpeakeasyMetadata()
  @Expose({ name: "business_phone_number" })
  businessPhoneNumber?: string;

  /**
   * The first name of the person.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "first_name" })
  firstName?: string;

  /**
   * The first name of the person.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "last_name" })
  lastName?: string;

  /**
   * Nationality of the person. Must be a ISO 3166 alpha-3 country code (e.g. FRA).
   */
  @SpeakeasyMetadata()
  @Expose({ name: "nationality" })
  nationality?: string;

  /**
   * Title of the person (e.g. M., Dr., etc.)
   */
  @SpeakeasyMetadata()
  @Expose({ name: "title" })
  title?: string;
}
