export enum InputKey {
    email = 'email',
    password = 'password',
    repeatPassword = 'repeatPassword',
    lastName = 'lastName',
    firstName = 'firstName'
}
export type AuthInitialState = {
    email: string;
    password: string;
    emailError: string;
    passwordError: string;
    firstName: string;
    lastName: string;
    errorText: string;
    repeatPassword: string;
};

export type InputPayloadType = {
    value: string;
    key: InputKey;
};
