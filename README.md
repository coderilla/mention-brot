# mention-brot

## Process

1. Github hook for [PullRequestEvent](https://developer.github.com/v3/activity/events/types/#pullrequestevent) being handled by `mention-brot` on
 - action `opened`
 - action `edited`

2. use query `PullRequestInfo` (`REQUESTS.gql`) in addition with field `number` provided by the hook to retrieve further data about the pull request

3. Determine potential reviewers
  - by using the internal algorithm (default)
  - optionally by using `suggestedReviewers` (set environment variable [`USE_SUGGESTED_REVIEWERS`](#Configuration))

4. Add selected reviewers to pull request

## Determine Reviewers


## Configuration

| Environment Name        | Type      | Description                   | Default    |
| ----------------------- | --------- | ----------------------------- | ---------- |
| NODE_ENV*               | string    | The Node.js Environment       | -          |
| PORT*                   | number    | -                             | 3000       |
| GITHUB_TOKEN*           | string    | The GitHub OAuth Token.       | -          |
| HEALTH_ROUTE_PATH*      | string    | -                             | /_health   |
| MAX_REVIEWERS           | number    | -                             | 5          |
| USE_SUGGESTED_REVIEWERS | boolean   | -                             | false      |
| SKIP_FILES              | json      | -                             | ["src/**"] |

* required

## Resources

- OAuth Token: https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql