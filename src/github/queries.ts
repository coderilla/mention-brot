import gql from 'graphql-tag';

export const FindPullRequestById = gql`
  query FindPullRequestById($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      pullRequest(number: $number) {
        id
        # TODO: pagination
        commits(first: 40) {
          totalCount
          pageInfo {
            hasNextPage
            startCursor
            endCursor
          }
          edges {
            node {
              resourcePath
              url
            }
          }
        }
        suggestedReviewers {
          isAuthor
          isCommenter
          reviewer {
            id
            name
          }
        }
        baseRef {
          id
          name
        }
      }
    }
  }
`;
