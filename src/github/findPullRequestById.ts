import client from './client';

/**
 * Returns a single pull request from the current repository by number.
 *
 * @param owner The organization / user name.
 * @param name The repository name.
 * @param id The pull-request id.
 * @see https://developer.github.com/v4/reference/object/repository/
 */
export default function findPullRequestById(owner: string, name: string, id: number): Promise<any> {
  return Promise.resolve();
}
