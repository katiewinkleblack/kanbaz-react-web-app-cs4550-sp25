
import * as client from "./client";
import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./accountReducer";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const currentUser = await client.profile();
        dispatch(setCurrentUser(currentUser));
      } catch (err: any) {
        if (err?.response?.status === 401) {
          console.log("🔐 No active session");
        } else {
          console.error("Error fetching profile:", err);
        }
      } finally {
        setPending(false);
      }
    };

    fetchProfile();
  }, [dispatch]);

  if (pending) {
    return <div>Loading session...</div>; 
  }

  return children;
}