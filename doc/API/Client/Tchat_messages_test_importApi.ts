/**
 * MyAstro
 * API generated with [PHP-CRUD-API](https://github.com/mevdschee/php-crud-api)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/// <reference path="api.d.ts" />

/* tslint:disable:no-unused-variable member-ordering */

namespace API.Client {
    'use strict';

    export class Tchat_messages_test_importApi {
        protected basePath = 'http://myastro-omnizya.c9users.io/api/index.php';
        public defaultHeaders : any = {};

        static $inject: string[] = ['$http', '$httpParamSerializer', 'basePath'];

        constructor(protected $http: ng.IHttpService, protected $httpParamSerializer?: (d: any) => any, basePath?: string) {
            if (basePath !== undefined) {
                this.basePath = basePath;
            }
        }

        private extendObj<T1,T2>(objA: T1, objB: T2) {
            for(let key in objB){
                if(objB.hasOwnProperty(key)){
                    objA[key] = objB[key];
                }
            }
            return <T1&T2>objA;
        }

        /**
         * List
         * 
         * @param exclude One or more related entities (comma separated).
         * @param include One or more related entities (comma separated).
         * @param order Column you want to sort on and the sort direction (comma separated). Example: id,desc
         * @param page Page number and page size (comma separated). NB: You cannot use \&quot;page\&quot; without \&quot;order\&quot;! Example: 1,10
         * @param transform Transform the records to object format. NB: This can also be done client-side in JavaScript!
         * @param columns The table columns you want to retrieve (comma separated). Example: posts.*,categories.name
         * @param filter[] Filters to be applied. Each filter consists of a column, an operator and a value (comma separated). Example: id,eq,1
         * @param satisfy Should all filters match (default)? Or any?
         */
        public tchatMessagesTestImportGet (exclude?: string, include?: string, order?: string, page?: string, transform?: boolean, columns?: string, filter[]?: Array<string>, satisfy?: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<Array<InlineResponse20020>> {
            const localVarPath = this.basePath + '/tchat_messages_test_import';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            if (exclude !== undefined) {
                queryParameters['exclude'] = exclude;
            }

            if (include !== undefined) {
                queryParameters['include'] = include;
            }

            if (order !== undefined) {
                queryParameters['order'] = order;
            }

            if (page !== undefined) {
                queryParameters['page'] = page;
            }

            if (transform !== undefined) {
                queryParameters['transform'] = transform;
            }

            if (columns !== undefined) {
                queryParameters['columns'] = columns;
            }

            if (filter[] !== undefined) {
                queryParameters['filter[]'] = filter[];
            }

            if (satisfy !== undefined) {
                queryParameters['satisfy'] = satisfy;
            }

            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Delete
         * 
         * @param id Identifier for item.
         */
        public tchatMessagesTestImportIdDelete (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/tchat_messages_test_import/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling tchatMessagesTestImportIdDelete.');
            }
            let httpRequestParams: any = {
                method: 'DELETE',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Read
         * 
         * @param id Identifier for item.
         */
        public tchatMessagesTestImportIdGet (id: string, extraHttpRequestParams?: any ) : ng.IHttpPromise<InlineResponse20020> {
            const localVarPath = this.basePath + '/tchat_messages_test_import/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling tchatMessagesTestImportIdGet.');
            }
            let httpRequestParams: any = {
                method: 'GET',
                url: localVarPath,
                json: true,
                                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Increment
         * 
         * @param id Identifier for item.
         * @param item Properties of item to update.
         */
        public tchatMessagesTestImportIdPatch (id: string, item: Item71, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/tchat_messages_test_import/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling tchatMessagesTestImportIdPatch.');
            }
            // verify required parameter 'item' is not null or undefined
            if (item === null || item === undefined) {
                throw new Error('Required parameter item was null or undefined when calling tchatMessagesTestImportIdPatch.');
            }
            let httpRequestParams: any = {
                method: 'PATCH',
                url: localVarPath,
                json: true,
                data: item,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Update
         * 
         * @param id Identifier for item.
         * @param item Properties of item to update.
         */
        public tchatMessagesTestImportIdPut (id: string, item: Item70, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/tchat_messages_test_import/{id}'
                .replace('{' + 'id' + '}', String(id));

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new Error('Required parameter id was null or undefined when calling tchatMessagesTestImportIdPut.');
            }
            // verify required parameter 'item' is not null or undefined
            if (item === null || item === undefined) {
                throw new Error('Required parameter item was null or undefined when calling tchatMessagesTestImportIdPut.');
            }
            let httpRequestParams: any = {
                method: 'PUT',
                url: localVarPath,
                json: true,
                data: item,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
        /**
         * Create
         * 
         * @param item Item to create.
         */
        public tchatMessagesTestImportPost (item: Item69, extraHttpRequestParams?: any ) : ng.IHttpPromise<number> {
            const localVarPath = this.basePath + '/tchat_messages_test_import';

            let queryParameters: any = {};
            let headerParams: any = this.extendObj({}, this.defaultHeaders);
            // verify required parameter 'item' is not null or undefined
            if (item === null || item === undefined) {
                throw new Error('Required parameter item was null or undefined when calling tchatMessagesTestImportPost.');
            }
            let httpRequestParams: any = {
                method: 'POST',
                url: localVarPath,
                json: true,
                data: item,
                                params: queryParameters,
                headers: headerParams
            };

            if (extraHttpRequestParams) {
                httpRequestParams = this.extendObj(httpRequestParams, extraHttpRequestParams);
            }

            return this.$http(httpRequestParams);
        }
    }
}
