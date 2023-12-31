const BASE_URL = 'https://fungi-tech-backend-458721741ac9.herokuapp.com';

console.log(BASE_URL);

export async function index() {
  const res = await fetch(`${BASE_URL}/strains`, {
    method: "GET",
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function create(data) {
  console.log(data)
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(`${BASE_URL}/strains`, config);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function detail(id) {
  const URL = `${BASE_URL}/strains/${id}`;
  const config = {
    method: "GET",
  };
  const res = await fetch(URL, config);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function destroy(id) {
  const URL = `${BASE_URL}/strains/${id}`;
  const config = {
    method: "DELETE",
  };
  const res = await fetch(URL, config);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}

export async function update(id, data) {
  const URL = `${BASE_URL}/strains/${id}`;
  const config = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const res = await fetch(URL, config);

  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Invalid Request");
  }
}