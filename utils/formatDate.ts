export async function fetcher<T>(
  url: string,
  options?: RequestInit
): Promise<T> {


  const response =
    await fetch(
      url,
      options
    );



  if (!response.ok) {

    throw new Error(
      `Failed to fetch data: ${response.status}`
    );

  }



  return response.json();

}





export async function postFetcher<T>(
  url: string,
  body: unknown
): Promise<T> {


  const response =
    await fetch(
      url,
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body:
          JSON.stringify(body),
      }
    );



  if (!response.ok) {

    throw new Error(
      `Request failed: ${response.status}`
    );

  }



  return response.json();

}