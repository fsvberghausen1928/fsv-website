import { NextResponse } from "next/server";
import news from "@/data/news.json";

export async function GET() {
  try {
    return NextResponse.json(
      {
        success: true,
        data: news,
      },
      {
        status: 200,
      }
    );

  } catch (error) {

    console.error("News API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to load news.",
      },
      {
        status: 500,
      }
    );
  }
}