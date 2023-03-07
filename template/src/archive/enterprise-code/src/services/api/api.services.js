import CONFIG from '@config';

export async function authGoogleApi(body) {
  const response = await fetch(`${CONFIG.BACKEND_URL}/google/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  if (
    response.status === 200 ||
    response.status === 201 ||
    response.status === 400 ||
    response.status === 401
  ) {
    return await response.json();
  } else {
    let errResponse = await response.json();
    throw new Error(errResponse.error);
  }
}
