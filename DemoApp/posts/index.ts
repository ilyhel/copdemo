/* tslint:disable */
/* eslint-disable */
// Generated by Microsoft Kiota
import { createPostFromDiscriminatorValue, serializePost, type Post } from '../models/';
import { PostItemRequestBuilderRequestsMetadata, type PostItemRequestBuilder } from './item/';
import { type BaseRequestBuilder, type KeysToExcludeForNavigationMetadata, type NavigationMetadata, type Parsable, type ParsableFactory, type RequestConfiguration, type RequestInformation, type RequestsMetadata } from '@microsoft/kiota-abstractions';

/**
 * Builds and executes requests for operations under /posts
 */
export interface PostsRequestBuilder extends BaseRequestBuilder<PostsRequestBuilder> {
    /**
     * Gets an item from the DemoAPINS.posts.item collection
     * @param postId key: id of post
     * @returns {PostItemRequestBuilder}
     */
     byPostId(postId: number) : PostItemRequestBuilder;
    /**
     * Get posts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Post[]>}
     */
     get(requestConfiguration?: RequestConfiguration<PostsRequestBuilderGetQueryParameters> | undefined) : Promise<Post[] | undefined>;
    /**
     * Create post
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {Promise<Post>}
     */
     post(body: Post, requestConfiguration?: RequestConfiguration<object> | undefined) : Promise<Post | undefined>;
    /**
     * Get posts
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toGetRequestInformation(requestConfiguration?: RequestConfiguration<PostsRequestBuilderGetQueryParameters> | undefined) : RequestInformation;
    /**
     * Create post
     * @param body The request body
     * @param requestConfiguration Configuration for the request such as headers, query parameters, and middleware options.
     * @returns {RequestInformation}
     */
     toPostRequestInformation(body: Post, requestConfiguration?: RequestConfiguration<object> | undefined) : RequestInformation;
}
/**
 * Get posts
 */
export interface PostsRequestBuilderGetQueryParameters {
    /**
     * Filter results by title
     */
    title?: string;
    /**
     * Filter results by user ID
     */
    userId?: number;
}
/**
 * Uri template for the request builder.
 */
export const PostsRequestBuilderUriTemplate = "{+baseurl}/posts{?title*,userId*}";
/**
 * Metadata for all the navigation properties in the request builder.
 */
export const PostsRequestBuilderNavigationMetadata: Record<Exclude<keyof PostsRequestBuilder, KeysToExcludeForNavigationMetadata>, NavigationMetadata> = {
    byPostId: {
        requestsMetadata: PostItemRequestBuilderRequestsMetadata,
        pathParametersMappings: ["post%2Did"],
    },
};
/**
 * Metadata for all the requests in the request builder.
 */
export const PostsRequestBuilderRequestsMetadata: RequestsMetadata = {
    get: {
        uriTemplate: PostsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "sendCollection",
        responseBodyFactory:  createPostFromDiscriminatorValue,
    },
    post: {
        uriTemplate: PostsRequestBuilderUriTemplate,
        responseBodyContentType: "application/json",
        adapterMethodName: "send",
        responseBodyFactory:  createPostFromDiscriminatorValue,
        requestBodyContentType: "application/json",
        requestBodySerializer: serializePost,
        requestInformationContentSetMethod: "setContentFromParsable",
    },
};
/* tslint:enable */
/* eslint-enable */