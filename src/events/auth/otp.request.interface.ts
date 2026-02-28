export interface OtpRequestEvent {
    identifier: string;
    code: string;
    type: 'email' | 'phone';
}