const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "";



interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}



export async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {


  try {

    const response = await fetch(
      `${API_BASE_URL}${endpoint}`,
      {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options?.headers,
        },
      }
    );





    const data =
      await response.json();





    if (!response.ok) {

      throw new Error(
        data.message ||
        "API request failed."
      );

    }





    return data;


  } catch (error) {

    console.error(
      "API Error:",
      error
    );



    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Unknown API error.",
    };

  }

}