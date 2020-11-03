export const formatFieldName = (name: string, prefix?: string) =>
    prefix ? `${prefix}.${name}` : name;

export const formatRequired = (name: string) => `${name} is required.`;

export const formatMaxLength = (name: string, length: number) =>
    `${name} must be less than ${length} characters.`;

export const formatMaxCurrency = (name: string, length: number) =>
    `${name} must be less than $${length.toFixed(2)}`;
export const formatMinCurrency = (name: string, length: number) =>
    `${name} must be greater than $${length.toFixed(2)}`;

export const formatMaxPercentage = (name: string, length: number) =>
    `${name} must be less than ${length.toFixed(2)}%`;
export const formatMinPercentage = (name: string, length: number) =>
    `${name} must be greater than ${length.toFixed(2)}%`;