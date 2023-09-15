"use client";
import { createContext, useEffect, useReducer } from "react";

type stateType = {
  id: string | null;
  username: string | null;
  loading: boolean;
  err: string | null;
};

type ActionType = {
  type: string;
  payload: { id: string; username: string } | string;
};

let id, username;
// can't use localStorage on server side
if (typeof window !== "undefined") {
  id = localStorage.getItem("id");
  username = localStorage.getItem("username");
}

const INITIAL_STATE = {
  id: id ? JSON.parse(id) : null,
  username: username ? JSON.parse(username) : null,
  loading: false,
  err: null,
};

export const AuthContext = createContext<{
  state: stateType;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
});

const reducer = (state: stateType, action: ActionType): stateType => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        id: null,
        username: null,
        loading: true,
        err: null,
      };
    case "LOGIN_SUCCESS":
      if (typeof action.payload == "object") {
        return {
          id: action.payload.id,
          username: action.payload.username,
          loading: false,
          err: null,
        };
      } else {
        return state;
      }
    case "LOGIN_FAILURE":
      if (typeof action.payload == "string") {
        return {
          id: null,
          username: null,
          loading: false,
          err: action.payload,
        };
      } else {
        return state;
      }
    case "LOGOUT":
      return {
        id: null,
        username: null,
        loading: false,
        err: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(state.id));
    localStorage.setItem("username", JSON.stringify(state.username));
  }, [state.id, state.username]);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
