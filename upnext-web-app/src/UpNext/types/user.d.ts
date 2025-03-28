/**
 * Represents user credentials for authentication.
 * - `username`: The unique username of the user.
 * - `password`: The user's password.
 */
export interface UserCredentials {
  username: string;
  password: string;
}

/**
 * Represents a user document, including user credentials and additional details.
 * - `username`: The unique username of the user.
 * - `password`: The user's password.
 * - `dateJoined`: The date when the user registered.
 * - `biography`: A short description or bio of the user (optional).
 */
export interface User extends UserCredentials {
  _id: string;
  firstName: string;
  lastName: string;
  dateJoined: Date;
  email: string;
  phone: string;
  role: string;
  followers: User[];
  following: User[];
}

/**
 * Express request for user login, containing user credentials.
 * - `username`: The username submitted in the request (body).
 * - `password`: The password submitted in the request (body).
 * - `biography`: Optional field for biography information (body).
 */
export interface UserRequest extends Request {
  body: {
    username: string;
    password: string;
    biography?: string;
  };
}

/**
 * Express request for querying a user by their username.
 * - `username`: The username provided as a route parameter.
 */
export interface UserByUsernameRequest extends Request {
  params: {
    username: string;
  };
}

/**
 * Represents a "safe" user object that excludes sensitive information like the password.
 */
export type SafeDatabaseUser = Omit<DatabaseUser, "password">;

/**
 * Represents the response for user-related operations.
 * - `SafeDatabaseUser`: A user object without sensitive data if the operation is successful.
 * - `error`: An error message if the operation fails.
 */
export type UserResponse = SafeDatabaseUser | { error: string };

/**
 * Represents the response for multiple user-related operations.
 * - `SafeDatabaseUser[]`: A list of user objects without sensitive data if the operation is successful.
 * - `error`: An error message if the operation fails.
 */
export type UsersResponse = SafeDatabaseUser[] | { error: string };

/**
 * Express request for updating a user's biography.
 * - `username`: The username whose biography is being updated (body).
 * - `biography`: The new biography content to be set (body).
 */
export interface UpdateBiographyRequest extends Request {
  body: {
    username: string;
    biography: string;
  };
}
