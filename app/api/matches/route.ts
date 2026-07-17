import { NextResponse } from "next/server";
import matches from "@/data/matches.json";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: matches,
      },
      {
        status: 200,
      }
    );

  } catch (error) {
    console.error("Matches API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load matches.",
      },
      {
        status: 500,
      }
    );
  }
}