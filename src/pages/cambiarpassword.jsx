import { useState } from "react";
import axios from "axios";

export default function CambiarPassword() {
  const [actual, setActual] = useState("");
  const [nueva, setNueva] = useState("");

  const cambiarPassword = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.put(
        "http://localhost:3001/auth/change-password",
        {
          currentPassword: actual,
          newPassword: nueva,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

    } catch (error) {
      console.log(error);
      alert("Error al cambiar contraseña");
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Contraseña actual"
        value={actual}
        onChange={(e) => setActual(e.target.value)}
      />

      <input
        type="password"
        placeholder="Nueva contraseña"
        value={nueva}
        onChange={(e) => setNueva(e.target.value)}
      />

      <button onClick={cambiarPassword}>
        Cambiar contraseña
      </button>
    </div>
  );
}