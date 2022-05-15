import {
  AuthPayload,
  AuthResponse,
  GetProfileResponse,
  UpdateProfilePayload,
} from '@models';
import { rest } from 'msw';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const mockUser = {
  id: '1',
  email: 'test1@mail.com',
  password: 'password',
  avatarUrl: null,
  bio: null,
  name: null,
  phone: null,
};

export const mockHandlers = [
  rest.post(`${BASE_URL}/auth/login`, (req, res, ctx) => {
    const { email, password } = (req.body || {}) as AuthPayload;
    if (email !== mockUser.email) {
      return res(
        ctx.status(404),
        ctx.json({
          ok: false,
          error: `User with email ${email} not found`,
        })
      );
    }

    if (password !== mockUser.password) {
      return res(
        ctx.status(400),
        ctx.json({
          ok: false,
          error: 'Invalid password',
        })
      );
    }

    return res(
      ctx.status(200),
      ctx.json({
        ok: true,
        data: {
          token: 'ey',
          user: {
            email,
          },
        },
      } as AuthResponse)
    );
  }),

  rest.post(`${BASE_URL}/auth/register`, (req, res, ctx) => {
    const { email } = (req.body || {}) as AuthPayload;
    if (mockUser.email === email) {
      return res(
        ctx.status(400),
        ctx.json({
          ok: false,
          error: 'User already exist',
        })
      );
    }

    return res(
      ctx.status(201),
      ctx.json({
        ok: true,
        data: {
          token: 'ey',
          user: {
            email,
          },
        },
      } as AuthResponse)
    );
  }),

  rest.get(`${BASE_URL}/users/profile`, (req, res, ctx) => {
    const bearer = req.headers.get('Authorization');
    if (!bearer) {
      return res(
        ctx.status(401),
        ctx.json({
          ok: false,
          error: 'No Authorization headers',
        })
      );
    }

    const [, token] = bearer.split('Bearer ');
    if (!token) {
      return res(
        ctx.status(401),
        ctx.json({
          ok: false,
          error: 'No token',
        })
      );
    }

    const { password: _, ...data } = mockUser;
    return res(
      ctx.status(200),
      ctx.json({ ok: true, data } as GetProfileResponse)
    );
  }),

  rest.put(`${BASE_URL}/users/profile/${mockUser.id}`, (req, res, ctx) => {
    const { email } = (req.body || {}) as UpdateProfilePayload;
    if (!email) {
      return res(
        ctx.status(400),
        ctx.json({
          ok: false,
          error: 'Email must not be empty',
        })
      );
    }

    return res(ctx.status(204));
  }),
];
