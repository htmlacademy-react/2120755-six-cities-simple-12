import { Action } from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { createAPI } from '../utils/api';
import { checkAuthAction, login } from './api-actions';
import { ApiRoutes } from '../utils/const';
import { State } from '../types/store';
import { mockUserData } from '../mocks/userData';
import { LoginData } from '@customTypes/index';

describe('Async actions', () => {
  const api = createAPI();
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];

  const mockStore = configureMockStore<
      State,
      Action<string>,
      ThunkDispatch<State, typeof api, Action>
    >(middlewares);

  it('should authorization status is «auth» when server return 200', async () => {
    const store = mockStore();
    mockAPI.onGet(ApiRoutes.Login).reply(200, mockUserData);

    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type
    ]);
  });

  it('should dispatch RequriedAuthorization when POST /login', async () => {
    const testUser: LoginData = {email: 'test@test.ru', password: '123456'};

    mockAPI
      .onPost(ApiRoutes.Login)
      .reply(200, {token: 'secret'});

    const store = mockStore();
    Storage.prototype.setItem = jest.fn();

    await store.dispatch(login(testUser));

    const actions = store.getActions().map(({type}) => type);

    expect(actions).toEqual([
      login.pending.type,
      login.fulfilled.type
    ]);

    expect(Storage.prototype.setItem).toBeCalledTimes(1);
    expect(Storage.prototype.setItem).toBeCalledWith('6-cities-token', 'secret');
  });
});
