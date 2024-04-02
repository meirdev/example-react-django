import { useNavigate } from "react-router-dom";

import { postTokenVerify } from "../api/client";

export async function useIsLogged() {
  const navigate = useNavigate();

  const token = localStorage.getItem("accessToken");

  try {
    await postTokenVerify({
      token: token!,
    });
  } catch {
    navigate("/login");
  }
}
