const FUSSBALL_DE_API_URL =
  process.env.FUSSBALL_DE_API_URL || "";



interface FussballDeResponse<T> {
  data: T;
  success: boolean;
}



export async function fetchFussballData<T>(
  endpoint: string
): Promise<FussballDeResponse<T>> {


  try {


    const response = await fetch(
      `${FUSSBALL_DE_API_URL}${endpoint}`,
      {
        next: {
          revalidate: 3600,
        },
      }
    );





    if (!response.ok) {

      throw new Error(
        "Failed to fetch Fussball.de data."
      );

    }





    const data =
      await response.json();





    return {
      success: true,
      data,
    };



  } catch (error) {


    console.error(
      "Fussball.de API error:",
      error
    );



    return {
      success: false,
      data: [] as T,
    };

  }

}





export async function getTeamMatches(
  teamId: string
) {

  return fetchFussballData(
    `/teams/${teamId}/matches`
  );

}





export async function getLeagueTable(
  leagueId: string
) {

  return fetchFussballData(
    `/leagues/${leagueId}/table`
  );

}