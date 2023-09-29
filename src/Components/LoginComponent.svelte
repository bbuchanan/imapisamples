<script lang="ts">
  import { goto } from "$app/navigation";
  import { apiUrl } from "../lib/constants";
  let username = "";
  let password = "";
  const doLogin = async () => {
    const response = await fetch(`${apiUrl}token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.password) {
        localStorage.setItem("user", JSON.stringify(data));
        goto("/search");
      } else {
        alert("Login failed");
      }
    } else {
      alert("Login failed");
    }
  };
</script>

<h1>Login</h1>
<label for="username"
  >Email:
  <input id="username" type="text" bind:value={username} />
</label>
<label for="password"
  >Password:
  <input type="password" bind:value={password} />
</label>
<button on:click={doLogin}>Login</button>
