import account from "../../src/store/account"
import { AccountServiceImpl } from "../../src/services/account/account.service.impl";
import { ServiceResponse } from "../../src/services/api";
import { Account } from "../../src/models";
import { CreateAccountParam } from "../../src/types"
import { mockCreate } from "./__mock__/account-service.mock"

jest
  .spyOn(AccountServiceImpl.prototype, 'create')
  .mockImplementation((user: CreateAccountParam): Promise<ServiceResponse<Account>> => {
    return mockCreate(user)
  });

describe("Store/action", () => {
  it("should commit REGISTER_FAILURE for validation error", async () => {
    const commit = jest.fn()
    await account.actions.register({ commit }, {
      username: 'test@test.com',
      password: 'asdasd',
      confirmPassword: 'asdasd'
    })
    expect(commit).toHaveBeenCalledWith("REGISTER_FAILURE");
  })

  it("should create account Successfully", async () => {
    const commit = jest.fn()
    await account.actions.register({ commit }, {
      username: 'test@test.com',
      password: 'asdkdk@12394!!md',
      confirmPassword: 'asdkdk@12394!!md'
    })
    expect(commit).toHaveBeenCalledWith("REGISTER_SUCCESS", { "id": "1", "username": "test@test.com" });
  })
})

describe("Store/getter", () => {
  it("should return correct values", async () => {
    const state = {
      isLoggedIn: true,
      account: { username: "test@test.com", id: "1" }
    }
    const isLoggedIn = account.getters.isLoggedIn(state)
    const accountRes = account.getters.account(state)
    expect(isLoggedIn).toBe(true);
    expect(accountRes.username).toBe("test@test.com");
    expect(accountRes.id).toBe("1");
  })
})

describe("Store/mutator", () => {
  it("should set account data and isLoggedIn to true on REGISTER_SUCCESS", () => {
    const accountObj: Account = new Account({
      username: 'test@test.com',
      id: "1"
    })

    const state = {
      isLoggedIn: true,
      account: { username: "", id: "" }
    }

    account.mutations.REGISTER_SUCCESS(state, accountObj)

    expect(state).toEqual({
      isLoggedIn: true,
      account: { username: "test@test.com", id: "1" }
    })
  })

  it("should unset account data and isLoggedIn to false on REGISTER_FAILURE", () => {
    const state = {
      isLoggedIn: true,
      account: { username: "test@test.com", id: "1" }
    }
    account.mutations.REGISTER_FAILURE(state)
    expect(state).toEqual({
      isLoggedIn: false,
      account: {}
    })
  })
})
