//error handles error messages that firebase could through (used for login/sign up)
export const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
        case "auth/email-already-in-use":
            return "This email is already registered. Try logging in.";
        case "auth/invalid-email":
            return "Please enter a valid email.";
        case "auth/user-not-found":
            return "Invalid credentials.";
        case "auth/wrong-password":
            return "Incorrect password.";
        case "auth/missing-email":
            return "Please enter your email address."
        case "auth/missing-password":
            return "Please enter your password."
        default:
            return "Something went wrong. Please try again.";
    }
};