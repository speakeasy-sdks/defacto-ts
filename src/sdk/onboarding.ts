/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import * as shared from "./models/shared";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Onboarding {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  async deactivateBorrower(
    borrowerId: string,
    config?: AxiosRequestConfig
  ): Promise<operations.DeactivateBorrowerResponse> {
    const req = new operations.DeactivateBorrowerRequest({
      borrowerId: borrowerId,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/borrower/{borrower_id}/deactivate",
      req
    );

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeactivateBorrowerResponse =
      new operations.DeactivateBorrowerResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 204:
        if (utils.matchContentType(contentType, `*/*`)) {
          const resBody: string = JSON.stringify(httpRes?.data, null, 0);
          const out: Uint8Array = new Uint8Array(resBody.length);
          for (let i = 0; i < resBody.length; i++)
            out[i] = resBody.charCodeAt(i);
          res.body = out;
        }
        break;
    }

    return res;
  }

  async enrollBorrower(
    req: shared.APIPostBorrower,
    config?: AxiosRequestConfig
  ): Promise<operations.EnrollBorrowerResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new shared.APIPostBorrower(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/borrowers";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.EnrollBorrowerResponse =
      new operations.EnrollBorrowerResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 201:
        if (utils.matchContentType(contentType, `*/*`)) {
          const resBody: string = JSON.stringify(httpRes?.data, null, 0);
          const out: Uint8Array = new Uint8Array(resBody.length);
          for (let i = 0; i < resBody.length; i++)
            out[i] = resBody.charCodeAt(i);
          res.body = out;
        }
        break;
    }

    return res;
  }

  /**
   * List all your borrowers
   */
  async listBorrowers(
    borrowerId?: string[],
    borrowerIdentifier?: string,
    cursor?: string,
    pageSize?: number,
    config?: AxiosRequestConfig
  ): Promise<operations.ListBorrowersResponse> {
    const req = new operations.ListBorrowersRequest({
      borrowerId: borrowerId,
      borrowerIdentifier: borrowerIdentifier,
      cursor: cursor,
      pageSize: pageSize,
    });
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/borrowers";

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...config?.headers };
    const queryParams: string = utils.serializeQueryParams(req);
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url + queryParams,
      method: "get",
      headers: headers,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.ListBorrowersResponse =
      new operations.ListBorrowersResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `*/*`)) {
          const resBody: string = JSON.stringify(httpRes?.data, null, 0);
          const out: Uint8Array = new Uint8Array(resBody.length);
          for (let i = 0; i < resBody.length; i++)
            out[i] = resBody.charCodeAt(i);
          res.body = out;
        }
        break;
    }

    return res;
  }

  /**
   * Register the date a new borrower accepted our T&Cs
   */
  async signBorrower(
    borrowerId: string,
    signedInput?: shared.SignedInput,
    config?: AxiosRequestConfig
  ): Promise<operations.SignBorrowerResponse> {
    const req = new operations.SignBorrowerRequest({
      borrowerId: borrowerId,
      signedInput: signedInput,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(
      baseURL,
      "/borrower/{borrower_id}/sign",
      req
    );

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "signedInput",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    headers[
      "user-agent"
    ] = `speakeasy-sdk/${this._language} ${this._sdkVersion} ${this._genVersion}`;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.SignBorrowerResponse =
      new operations.SignBorrowerResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `*/*`)) {
          const resBody: string = JSON.stringify(httpRes?.data, null, 0);
          const out: Uint8Array = new Uint8Array(resBody.length);
          for (let i = 0; i < resBody.length; i++)
            out[i] = resBody.charCodeAt(i);
          res.body = out;
        }
        break;
    }

    return res;
  }
}
