/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { PostsRequestBuilderNavigationMetadata, PostsRequestBuilderRequestsMetadata, type PostsRequestBuilder } from './posts/';
import { apiClientProxifier, registerDefaultDeserializer, registerDefaultSerializer, type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type RequestAdapter } from '@microsoft/kiota-abstractions';
import { FormParseNodeFactory, FormSerializationWriterFactory } from '@microsoft/kiota-serialization-form';
import { JsonParseNodeFactory, JsonSerializationWriterFactory } from '@microsoft/kiota-serialization-json';
import { MultipartSerializationWriterFactory } from '@microsoft/kiota-serialization-multipart';
import { TextParseNodeFactory, TextSerializationWriterFactory } from '@microsoft/kiota-serialization-text';

/**
 * Instantiates a new {@link Democlc} and sets the default values.
 * @param requestAdapter The request adapter to use to execute the requests.
 */
export function createDemoclc(requestAdapter: RequestAdapter) {
    registerDefaultSerializer(FormSerializationWriterFactory);
    registerDefaultSerializer(JsonSerializationWriterFactory);
    registerDefaultSerializer(TextSerializationWriterFactory);
    registerDefaultSerializer(MultipartSerializationWriterFactory);
    registerDefaultDeserializer(FormParseNodeFactory);
    registerDefaultDeserializer(JsonParseNodeFactory);
    registerDefaultDeserializer(TextParseNodeFactory);
    if (requestAdapter.baseUrl === undefined || requestAdapter.baseUrl === "") {
        requestAdapter.baseUrl = "https://jsonplaceholder.typicode.com";
    }
    const pathParameters: Record<string, unknown> = {
        "baseurl": requestAdapter.baseUrl,
    };
    return apiClientProxifier<Democlc>(requestAdapter, pathParameters, DemoclcNavigationMetadata, undefined);
}
/**
 * The main entry point of the SDK, exposes the configuration and the fluent API.
 */
export interface Democlc extends BaseRequestBuilder<Democlc> {
    /**
     * The posts property
     */
    get posts(): PostsRequestBuilder;
}
/**
 * Uri template for the request builder.
 */
export const DemoclcUriTemplate = "{+baseurl}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const DemoclcNavigationMetadata: Record<Exclude<keyof Democlc, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    posts: {
        requestsMetadata: PostsRequestBuilderRequestsMetadata,
        navigationMetadata: PostsRequestBuilderNavigationMetadata,
    },
};
/* tslint:enable */
/* eslint-enable */
