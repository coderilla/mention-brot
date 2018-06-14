/**
 * Adds a comment to an Issue or Pull Request.
 *
 * @param id The Node ID of the subject to modify.
 * @param body The contents of the comment.
 * @see https://developer.github.com/v4/reference/mutation/addcomment/
 */
export default function addComment(id: string, body: string): Promise<any> {
  return Promise.resolve();
}
