/**
 * Set review requests on a pull request
 *
 * @param id The Node ID of the pull request to modify.
 * @param users The Node IDs of the user to request.
 * @param union Add users to the set rather than replace.
 * @see https://developer.github.com/v4/reference/mutation/requestreviews/
 */
export default function requestReviews(id: string, users: string[], union: boolean = false): Promise<any> {
  return Promise.resolve();
}
