import bcrypt from 'bcrypt';

export const hashValue = async (value, saltRounds = 10) =>
    bcrypt.hash(value, saltRounds);

export const compareValue = async (value, hash) =>
    bcrypt.compare(value, hash);
