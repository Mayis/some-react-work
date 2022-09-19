import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function withUser(OriginalComponent) {
  return function ComponentWithUser() {
    const user = useSelector((state) => state.user);
    const navigate = useNavigate();
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
      if (!user) navigate("/login");
      setIsRendered(true);
    }, [user, navigate]);

    if (!isRendered || !user) return <p>Loading...</p>;

    return <OriginalComponent />;
  };
}
