/**
 *AgavePlatformScienceAPILib
 *
 * This file was automatically generated by APIMATIC BETA v2.0 on 10/07/2015
 */

'use strict';
angular.module('AgavePlatformScienceAPILib').factory('TransformsController', function ($q, Configuration, HttpClient, APIHelper) {
    return {
        /**
         * Find the transform of the given uuid
         * @param {string} transformId    Required parameter: The name of the transform requested.
         *
         * @return {promise<Transform>}
         */
        getTransform: function (transformId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/transforms/v2/{transformId}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "transformId": transformId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Transform a file and stage it to a specified location.
         * @param {TransformRequest} body    Required parameter: The transfer request details.
         * @param {string} owner    Required parameter: The name of the api user owning the file at the given path.
         * @param {string} path    Required parameter: The path to the file to be transformed and staged
         * @param {string} transformId    Required parameter: The name of the transform to apply to the given file.
         *
         * @return {promise<Transform>}
         */
        createAsyncTransform: function (body, owner, path, transformId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/transforms/v2/{transformId}/async/{owner}/{path}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "owner": owner,
                "path": path,
                "transformId": transformId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "POST",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * Transform a file and download it directly.
         * @param {TransformRequest} body    Required parameter: The transfer request details.
         * @param {string} owner    Required parameter: The name of the api user owning the file at the given path.
         * @param {string} path    Required parameter: The path to the file to be transformed and downloaded.
         * @param {string} transformId    Required parameter: The name of the transform to apply to the given file.
         *
         * @return {promise<binary>}
         */
        createSyncTransform: function (body, owner, path, transformId) {

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/transforms/v2/{transformId}/sync/{owner}/{path}";

            //Process template parameters
            queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
                "owner": owner,
                "path": path,
                "transformId": transformId
            });

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "content-type": "application/json; charset=utf-8",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //Remove null values
            APIHelper.cleanObject(body);

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "POST",
                queryUrl: queryUrl,
                headers: headers,
                body: body
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        },
        /**
         * List and search for transforms
         * @param {int|null} limit    Optional parameter: The maximum number of results returned from this query
         * @param {string|null} name    Optional parameter: The name of the transform
         * @param {int|null} offset    Optional parameter: The number of results skipped in the result set returned from this query
         * @param {string|null} tags    Optional parameter: One or more tags of the transform
         * @param {string|null} version    Optional parameter: The name of the transform
         *
         * @return {promise<array>}
         */
        listTransforms: function (limit, name, offset, tags, version) {
            //Assign default values
            limit = limit || 100;
            offset = offset || 0;

            //prepare query string for API call
            var baseUri = Configuration.BASEURI
            var queryBuilder = baseUri + "/transforms/v2/";

            //Process query parameters
            queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
                "naked": true,
                "limit": (null != limit) ? limit : 100,
                "name": name,
                "offset": (null != offset) ? offset : 0,
                "tags": tags,
                "version": version
            });

            //validate and preprocess url
            var queryUrl = APIHelper.cleanUrl(queryBuilder);

            //prepare headers
            var headers = {
                "accept": "application/json",
                "Authorization": "Bearer " + Configuration.oAuthAccessToken
            };

            //prepare and invoke the API call request to fetch the response
            var config = {
                method: "GET",
                queryUrl: queryUrl,
                headers: headers,
            };

            var response = HttpClient(config);

            //Create promise to return
            var deffered = $q.defer();

            //process response
            response.then(function (result) {
                deffered.resolve(result.body);
            }, function (result) {
                deffered.reject(APIHelper.appendContext({
                    errorMessage: "HTTP Response Not OK",
                    errorCode: result.code,
                    errorResponse: result.message
                }, result.getContext()));
            });

            return deffered.promise;
        }
    }
});