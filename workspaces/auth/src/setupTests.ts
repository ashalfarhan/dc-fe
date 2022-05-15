import '@testing-library/jest-dom';
import { mockServer } from '@mocks';

beforeAll(() => mockServer.listen());

afterEach(() => mockServer.resetHandlers());

afterAll(() => mockServer.close());
