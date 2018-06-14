

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindPullRequestById
// ====================================================

export interface FindPullRequestById_repository_pullRequest_commits_pageInfo {
  __typename: "PageInfo";
  hasNextPage: boolean;        // When paginating forwards, are there more items?
  startCursor: string | null;  // When paginating backwards, the cursor to continue.
  endCursor: string | null;    // When paginating forwards, the cursor to continue.
}

export interface FindPullRequestById_repository_pullRequest_commits_edges_node {
  __typename: "PullRequestCommit";
  resourcePath: any;  // The HTTP path for this pull request commit
  url: any;           // The HTTP URL for this pull request commit
}

export interface FindPullRequestById_repository_pullRequest_commits_edges {
  __typename: "PullRequestCommitEdge";
  node: FindPullRequestById_repository_pullRequest_commits_edges_node | null;  // The item at the end of the edge.
}

export interface FindPullRequestById_repository_pullRequest_commits {
  __typename: "PullRequestCommitConnection";
  totalCount: number;                                                                 // Identifies the total count of items in the connection.
  pageInfo: FindPullRequestById_repository_pullRequest_commits_pageInfo;              // Information to aid in pagination.
  edges: (FindPullRequestById_repository_pullRequest_commits_edges | null)[] | null;  // A list of edges.
}

export interface FindPullRequestById_repository_pullRequest_suggestedReviewers_reviewer {
  __typename: "User";
  id: string;
  name: string | null;  // The user's public profile name.
}

export interface FindPullRequestById_repository_pullRequest_suggestedReviewers {
  __typename: "SuggestedReviewer";
  isAuthor: boolean;                                                                 // Is this suggestion based on past commits?
  isCommenter: boolean;                                                              // Is this suggestion based on past review comments?
  reviewer: FindPullRequestById_repository_pullRequest_suggestedReviewers_reviewer;  // Identifies the user suggested to review the pull request.
}

export interface FindPullRequestById_repository_pullRequest_baseRef {
  __typename: "Ref";
  id: string;
  name: string;  // The ref name.
}

export interface FindPullRequestById_repository_pullRequest {
  __typename: "PullRequest";
  id: string;
  commits: FindPullRequestById_repository_pullRequest_commits;                                   // A list of commits present in this pull request's head branch not present in the base branch.
  suggestedReviewers: (FindPullRequestById_repository_pullRequest_suggestedReviewers | null)[];  // A list of reviewer suggestions based on commit history and past review comments.
  baseRef: FindPullRequestById_repository_pullRequest_baseRef | null;                            // Identifies the base Ref associated with the pull request.
}

export interface FindPullRequestById_repository {
  __typename: "Repository";
  pullRequest: FindPullRequestById_repository_pullRequest | null;  // Returns a single pull request from the current repository by number.
}

export interface FindPullRequestById {
  repository: FindPullRequestById_repository | null;  // Lookup a given repository by the owner and repository name.
}

export interface FindPullRequestByIdVariables {
  owner: string;
  name: string;
  number: number;
}

//==============================================================
// START Enums and Input Objects
// All enums and input objects are included in every output file
// for now, but this will be changed soon.
// TODO: Link to issue to fix this.
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================